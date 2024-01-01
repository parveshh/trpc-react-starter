import * as yup from 'yup';
//TODO: move to schemas
export const SignUpSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf(
      [yup.ref('password'), 'Passwords does not match'],
      'Passwords must match'
    ),
});
export type SignUpSchemaType = yup.InferType<typeof SignUpSchema>;
