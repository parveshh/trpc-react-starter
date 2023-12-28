import { Type, Static } from "@sinclair/typebox";
export const ConfigSchema = Type.Object({
  DB_HOST: Type.String({ minLength: 1 }),
  DB_PORT: Type.Number(),
  DB_USER: Type.String({ minLength: 1 }),
  DB_PASSWORD: Type.String({ minLength: 1 }),
  DB_NAME: Type.String({ minLength: 1 }),
});

export const ServerConfigSchema = Type.Object({
  DB_HOST: Type.String({ minLength: 1 }),
  DB_PORT: Type.Number(),
  DB_USER: Type.String({ minLength: 1 }),
  DB_PASSWORD: Type.String({ minLength: 1 }),
  DB_NAME: Type.String({ minLength: 1 }),
  PORT: Type.Number(),
});

export type ServerConfig = Static<typeof ServerConfigSchema>;
export type Config = Static<typeof ConfigSchema>;
