import { BaseError } from "./baseError";

export class UnAuthorizedError extends BaseError {
  constructor(message: string) {
    super(message, "UNAUTHORIZED");
  }
}
