import envSchema from "env-schema";
import { Config, ConfigSchema } from "@app/schemas";

const config: Config = envSchema({
  schema: ConfigSchema,
  dotenv: true,
});

export default config;
