import { Logger } from "pino";

import { TRPC_ERROR_CODE_KEY } from "@trpc/server/dist/rpc";
import { TRPCError } from "@trpc/server";
import { AnyError } from "../types";
import {
  BadRequestError,
  ConflictError,
  ForbiddenError,
  NotFoundError,
  ServerError,
} from "../errors";
import { classInstanceOf } from "./utils";

export default (logger: Logger) => (error: AnyError) => {
  const [errorCode, errorMessage]: [TRPC_ERROR_CODE_KEY, string] =
    classInstanceOf(error, ServerError) ||
    classInstanceOf(error, BadRequestError) ||
    classInstanceOf(error, ConflictError) ||
    classInstanceOf(error, NotFoundError) ||
    classInstanceOf(error, ForbiddenError)
      ? [error.code, error.message]
      : ["INTERNAL_SERVER_ERROR", "Internal Server Error"];

  logger.error(error);
  throw new TRPCError({
    code: errorCode,
    message: errorMessage,
  });
};
