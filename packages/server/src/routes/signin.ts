import { SigninSchema } from "@app/schemas";
import { publicProcedure } from "../procedures/publicProcedure";
import { router } from "../trpc";

export const signinRouter = publicProcedure.input(SigninSchema).query(() => {});
