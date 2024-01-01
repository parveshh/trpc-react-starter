import { Static, Type } from "@sinclair/typebox";
import { DBSchema } from "../common";
import * as yup from "yup";

export const UserSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
  details: yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
  }),
});

export const UserDbSchema = yup.object().shape({
  ...UserSchema.fields,
  ...DBSchema.fields,
  id: yup.string().required("ID is required").uuid("ID must be a valid UUID"),
});

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
export type UserSchemaType = yup.InferType<typeof UserSchema>;
export type UserDbSchemaType = yup.InferType<typeof UserDbSchema>;
