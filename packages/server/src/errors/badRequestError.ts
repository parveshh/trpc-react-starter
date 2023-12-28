import { BaseError } from "./baseError";

export class BadRequestError extends BaseError {
  constructor(message: string) {
    super(message, "BAD_REQUEST");
  }
}
