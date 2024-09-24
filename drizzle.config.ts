import { defineConfig } from "drizzle-kit";

if (!process.env.DB_URL_ES || !process.env.DB_TOKEN_ES) {
  throw new Error("DB_URL_ES and DB_TOKEN_ES missing");
}
export default defineConfig({
  dialect: "sqlite",
  driver: "turso",
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dbCredentials: {
    url: process.env.DB_URL_ES!,
    authToken: process.env.DB_TOKEN_ES!,
  },
});
