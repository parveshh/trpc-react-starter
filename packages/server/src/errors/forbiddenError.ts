import { BaseError } from "./baseError";

export class ForbiddenError extends BaseError {
  constructor(message: string) {
    super(message, "FORBIDDEN");
  }
}
