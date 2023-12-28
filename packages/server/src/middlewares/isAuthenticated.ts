import { t } from "../trpc";
import { UnAuthorizedError } from "../errors/";
import { verifyAuthToken } from "../utils/tokenUtils";

export const isAuthenticated = t.middleware(async (request) => {
  const { userRepository, req } = request.ctx;
  const { authorization } = req.headers;

  if (!authorization) {
    throw new UnAuthorizedError("No authorization header provided");
  }
  const token = authorization.split(" ")[1];
  if (!token) {
    throw new UnAuthorizedError("Malformed token");
  }
  const decoded = await verifyAuthToken(token);
  const { id } = decoded;
  if (!id) {
    throw new UnAuthorizedError("Invalid User or agency id");
  }
  const user = await userRepository.getUserById(id);
  if (!user) {
    throw new UnAuthorizedError("User not found");
  }
  return request.next({
    ctx: {
      user,
    },
  });
});
