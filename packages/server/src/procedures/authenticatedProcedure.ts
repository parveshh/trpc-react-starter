import { isAuthenticated } from "../middlewares/isAuthenticated";
import { t } from "../trpc";

export const authendicatedProcedure = t.procedure.use(isAuthenticated);
