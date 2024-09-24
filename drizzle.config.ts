import { defineConfig } from "drizzle-kit";

if (!process.env.DB_URL_BR || !process.env.DB_TOKEN_BR) {
  throw new Error("DB_URL_BR and DB_TOKEN_BR missing");
}
export default defineConfig({
  dialect: "sqlite",
  driver: "turso",
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dbCredentials: {
    url: process.env.DB_URL_BR!,
    authToken: process.env.DB_TOKEN_BR!,
  },
});
