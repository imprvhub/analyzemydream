// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000; 

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/paypal-webhook', (req, res) => {
  console.log('Webhook event received:', req.body);

  const event = req.body;

  if (event.event_type === 'BILLING.SUBSCRIPTION.CREATED') {
    const subscriptionId = event.resource.id;
    console.log('New Subscription ID:', subscriptionId);

    const csvFilePath = path.join(__dirname, 'subscriptions.csv');
    const csvData = `${subscriptionId}\n`;
    fs.appendFileSync(csvFilePath, csvData);


    res.status(200).json({ status: 'success' });
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
