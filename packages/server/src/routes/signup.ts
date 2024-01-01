import { UserSchema } from "@app/schemas";
import { publicProcedure } from "../procedures/publicProcedure";
import { createSHAHash } from "../utils/utils";
import { router } from "../trpc";

export const signUpRouter = publicProcedure
  .input(UserSchema)
  .mutation(async ({ input, ctx }) => {
    const { userRepository } = ctx;
    const passwordHash = createSHAHash(input.password);
    input.password = passwordHash;
    const user = await userRepository.createUser(input);
    return {
      [user.id]: user.id,
      [user.email]: user.email,
    };
  });
