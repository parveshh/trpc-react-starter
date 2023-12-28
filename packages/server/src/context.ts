import { User } from "@app/schemas";
import { UserRepository } from "@app/dbclient";
import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";

export type TRPCContext = {
  req: CreateFastifyContextOptions["req"];
  res: CreateFastifyContextOptions["res"];
  user: User;
  userRepository: UserRepository;
};
