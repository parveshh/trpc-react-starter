import { TRPC_ERROR_CODE_KEY } from "@trpc/server/dist/rpc";

export class BaseError extends Error {
  code: TRPC_ERROR_CODE_KEY;
  constructor(message: string, code: TRPC_ERROR_CODE_KEY) {
    super(message);
    this.code = code;
  }
}
