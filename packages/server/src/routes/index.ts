import { router } from "../trpc";
import { publicProcedure } from "../procedures/publicProcedure";
import { signin } from "./signin";
import { signUpRouter } from "./signup";
import { mergeRouters } from "@trpc/server";

export const appRouter = router({
  healthcheck: publicProcedure.query(() => {
    return "ok";
  }),
  signIn: signin,
  signUp: signUpRouter,
});

export type AppRouter = typeof appRouter;
