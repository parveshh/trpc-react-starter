import { Type, Static } from "@sinclair/typebox";
export const ConfigSchema = Type.Strict(
  Type.Object({
    DB_HOST: Type.String({ minLength: 1 }),
    DB_PORT: Type.Number(),
    DB_USER: Type.String({ minLength: 1 }),
    DB_PASSWORD: Type.String({ minLength: 1 }),
    DB_NAME: Type.String({ minLength: 1 }),
  })
);

export type Config = Static<typeof ConfigSchema>;
