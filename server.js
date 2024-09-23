const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { Pool } = require('pg');  
require('dotenv').config();  

const app = express();
const port = 3000;

app.use(bodyParser.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: { rejectUnauthorized: false }  
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS webhooks (
    id SERIAL PRIMARY KEY,
    subscription_id VARCHAR(255),
    event_type VARCHAR(255),
    event_time TIMESTAMPTZ,
    email VARCHAR(255),
    full_event JSONB
  );
`;

pool.query(createTableQuery)
  .then(() => console.log('Table created or already exists'))
  .catch(err => console.error('Error creating table:', err));

app.post('/paypal-webhook', async (req, res) => {
  console.log('Webhook event received:', req.body);

  const event = req.body;

  if (event.event_type === 'BILLING.SUBSCRIPTION.CREATED') {
    const subscriptionId = event.resource.id;
    const eventTime = event.create_time;
    const email = event.resource.subscriber?.email_address || null; 

    console.log('New Subscription ID:', subscriptionId);

    try {
      const insertQuery = `
        INSERT INTO webhooks (subscription_id, event_type, event_time, email, full_event)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;
      const values = [subscriptionId, event.event_type, eventTime, email, event];

      const result = await pool.query(insertQuery, values);
      console.log('Event stored in DB:', result.rows[0]);

      res.status(200).json({ status: 'success' });
    } catch (err) {
      console.error('Error storing event in DB:', err);
      res.status(500).json({ error: 'Database error' });
    }
  } else {
    res.status(400).json({ error: 'Unsupported event type' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
