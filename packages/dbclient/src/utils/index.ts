import pino from "pino";
import postgres from "postgres";
export const LoggerOf = (name: string) => pino({ name });

export const sqlWithConfig = (config: {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}) =>
  postgres({
    host: config.host,
    port: config.port,
    username: config.username,
    password: config.password,
    database: config.database,
    idle_timeout: 8,
    ssl: "prefer",
  });
