import * as yup from 'yup';
//TODO: move to schemas
export const SignInSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required'),
});
export type SignInSchemaType = yup.InferType<typeof SignInSchema>;
