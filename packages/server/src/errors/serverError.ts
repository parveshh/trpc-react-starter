import { BaseError } from "./baseError";

export class ServerError extends BaseError {
  constructor(message: string) {
    super(message, "INTERNAL_SERVER_ERROR");
  }
}
