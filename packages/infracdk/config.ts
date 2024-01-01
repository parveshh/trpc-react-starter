import envSchema from "env-schema";
import { Type, Static } from "@sinclair/typebox";

const ConfigSchema = Type.Strict(
  Type.Object({
    AWS_ACCESS_KEY_ID: Type.String({ minLength: 1 }),
    AWS_SECRET_ACCESS_KEY: Type.String({ minLength: 1 }),
    AWS_REGION: Type.String({ minLength: 1 }),
    AWS_ACCOUNT_ID: Type.String({ minLength: 1 }),
    STAGE: Type.String({ minLength: 1 }),
    DB_USER: Type.String({ minLength: 1 }),
    DB_PASSWORD: Type.String({ minLength: 1 }),
    DB_NAME: Type.String({ minLength: 1 }),
    CDK_DEFAULT_REGION: Type.String({ minLength: 1 }),
    DB_HOST: Type.String({ minLength: 1 }),
    DB_PORT: Type.Number(),
  })
);

export type Config = Static<typeof ConfigSchema>;

const config: Config = envSchema({
  schema: ConfigSchema,
  dotenv: true,
});

export default config;
