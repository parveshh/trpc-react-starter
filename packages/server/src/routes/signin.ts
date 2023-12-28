import { Compile, SigninSchema } from "@app/schemas";
import { publicProcedure } from "../procedures/publicProcedure";
import { router } from "../trpc";

export const signinRouter = publicProcedure
  .input(Compile(SigninSchema))
  .query(({ input, ctx }) => {
    const { email, password } = input;
  });
