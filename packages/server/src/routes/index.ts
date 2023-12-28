import { router } from "../trpc";
import { publicProcedure } from "../procedures/publicProcedure";
import { signinRouter } from "./signin";

export const appRouter = router({
  healthcheck: publicProcedure.query(() => {
    return "ok";
  }),
  signIn: signinRouter,
});
