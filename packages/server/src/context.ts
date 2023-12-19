import { User } from "@app/schemas";
import { UserRepository } from "@app/dbclient";

export type TRPCContext = {
  user: User;
  userRepository: UserRepository;
};
