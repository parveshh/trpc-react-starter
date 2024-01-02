import type {
  BadRequestError,
  BaseError,
  ConflictError,
  ForbiddenError,
  NotFoundError,
  ServerError,
  UnAuthorizedError,
} from "../errors";

export type TokenPayload = {
  id: string;
  name: string;
  email: string;
  role?: string;
};

export type AnyError =
  | Error
  | unknown
  | ServerError
  | BaseError
  | NotFoundError
  | ConflictError
  | BadRequestError
  | ForbiddenError
  | ConflictError
  | UnAuthorizedError;

export type GetType<T> = T extends new (...args: infer R) => T ? R : never;

export type Constructor<T> = new (...args: GetType<T>) => T;
