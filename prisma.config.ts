import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "npx ts-node prisma/seed",
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
