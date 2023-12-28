import { BaseError } from "./baseError";

export class ConflictError extends BaseError {
  constructor(message: string) {
    super(message, "CONFLICT");
  }
}
