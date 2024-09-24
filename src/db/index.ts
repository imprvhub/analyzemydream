import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";

const client = createClient({
  url: import.meta.env.DB_URL_ES,
  authToken: import.meta.env.DB_TOKEN_ES,
});

export const db = drizzle(client, { schema });
