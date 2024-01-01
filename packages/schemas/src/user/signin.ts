import { Static, Type } from "@sinclair/typebox";
import * as Yup from "yup";

export const SigninSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export type SigninSchemaType = Yup.InferType<typeof SigninSchema>;
