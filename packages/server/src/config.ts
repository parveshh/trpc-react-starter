import envSchema from "env-schema";
import { Compile, ServerConfig, ServerConfigSchema } from "@app/schemas";
import path from "path";
const config: ServerConfig = envSchema({
  schema: ServerConfigSchema,
  dotenv: {
    path: path.resolve(__dirname, "../.env"),
  },
});

export default config;
