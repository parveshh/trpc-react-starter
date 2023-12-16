import { Static, Type } from "@sinclair/typebox";
import { DBSchema } from "../common";

export const UserSchema = Type.Object({
  email: Type.String({ minLength: 1, format: "email" }),
  password: Type.String({ minLength: 1 }),
  details: Type.Object({
    firstName: Type.String({ minLength: 1 }),
    lastName: Type.String({ minLength: 1 }),
  }),
});

export const UserDbSchema = Type.Intersect([
  UserSchema,
  DBSchema,
  Type.Object({
    user_id: Type.String({ minLength: 1, format: "uuid" }),
  }),
]);

export type User = Static<typeof UserSchema>;
export type UserDb = Static<typeof UserDbSchema>;
