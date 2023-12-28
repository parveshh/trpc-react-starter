import { Static, Type } from "@sinclair/typebox";

export const SigninSchema = Type.Object(
  {
    email: Type.String({ minLength: 1, format: "email" }),
    password: Type.String({ minLength: 1 }),
  },
  { additionalProperties: false }
);

export type SigninSchemaType = Static<typeof SigninSchema>;
