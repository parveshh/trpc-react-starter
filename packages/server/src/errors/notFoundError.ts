import { TRPC_ERROR_CODES_BY_KEY } from "@trpc/server/dist/rpc";
import { BaseError } from "./baseError";

export class NotFoundError extends BaseError {
  constructor(message: string) {
    super(message, "NOT_FOUND");
  }
}
