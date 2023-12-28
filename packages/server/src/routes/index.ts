import { router } from "../trpc";
import { publicProcedure } from "../procedures/publicProcedure";

export const appRouter = router({
  healthcheck: publicProcedure.query(() => {
    return "ok";
  }),
signIn: 
});
