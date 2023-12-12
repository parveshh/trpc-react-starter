import "ts-node/register";
import type { Knex } from "knex";
import config from "./src/config";

const migrations = {
  tableName: "knex_migrations",
  directory: "src/migrations",
  extension: "ts",
};
const configuration: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      host: config.DB_HOST,
      port: config.DB_PORT,
      database: config.DB_NAME,
      user: config.DB_USER,
      password: config.DB_PASSWORD,
    },
    seeds: {
      directory: "src/seeds",
    },
    migrations,
  },
};

export default configuration;
