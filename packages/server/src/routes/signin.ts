import { SigninSchema } from "@app/schemas";
import { publicProcedure } from "../procedures/publicProcedure";
import {
  createSHAHash,
  generateAuthToken,
  generateRefreshToken,
} from "../utils/utils";
import { ForbiddenError } from "../errors";
import { LoggerOf } from "../utils/logger";
import errorHandler from "../utils/errorHandler";

const logger = LoggerOf("signin");
export const signin = publicProcedure
  .input(SigninSchema)
  .mutation(async ({ input, ctx }) => {
    try {
      const { email, password } = input;
      const passwordHash = createSHAHash(password);
      const { userRepository } = ctx;
      const user = await userRepository.signIn(email, passwordHash);
      if (!user) {
        throw new ForbiddenError("Invalid credentials");
      }
      const tokenPayload = {
        email: user.email,
        id: user.id,
        name: `${user.details.firstName} ${user.details.lastName}`,
      };
      const [accessToken, refreshToken] = await Promise.all([
        generateAuthToken(tokenPayload),
        generateRefreshToken(tokenPayload),
      ]);
      await userRepository.updateRefreshToken(user.id, refreshToken);
      return {
        accessToken,
        refreshToken,
      };
    } catch (error) {
      errorHandler(logger)(error);
    }
  });
