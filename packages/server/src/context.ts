import { UserSchemaType } from "@app/schemas";
import { UserRepository, sqlWithConfig } from "@app/dbclient";
import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import config from "./config";

export type TRPCContext = {
  req: CreateFastifyContextOptions["req"];
  res: CreateFastifyContextOptions["res"];
  user?: UserSchemaType;
  userRepository: UserRepository;
};

export function createContext({
  req,
  res,
}: CreateFastifyContextOptions): TRPCContext {
  const sql = sqlWithConfig({
    host: config.DB_HOST,
    port: config.DB_PORT,
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
  });
  const userRepository = new UserRepository(sql);

  return {
    req,
    res,
    userRepository,
  };
}
