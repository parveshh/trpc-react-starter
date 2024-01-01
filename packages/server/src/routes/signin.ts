import { SigninSchema } from "@app/schemas";
import { publicProcedure } from "../procedures/publicProcedure";

export const signin = publicProcedure
  .input(SigninSchema)
  .query(({ input, ctx }) => {
    const { email, password } = input;
  });
