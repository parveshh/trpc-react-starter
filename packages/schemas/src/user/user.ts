import { Static, Type } from "@sinclair/typebox";
import { DBSchema } from "../common";
import * as yup from "yup";

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
    id: Type.String({ minLength: 1, format: "uuid" }),
  }),
]);

export const SignUpSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf(
      [yup.ref("password"), "Passwords does not match"],
      "Passwords must match"
    ),
});
export type SignUpSchemaType = yup.InferType<typeof SignUpSchema>;
export type UserSchemaType = Static<typeof UserSchema>;
export type UserDbSchemaType = Static<typeof UserDbSchema>;
