import * as yup from "yup";

export const DBSchema = yup.object().shape({
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  is_active: yup.boolean().required(),
});

export const DBSchemaOptional = yup.object().shape({
  created_at: yup.date(),
  updated_at: yup.date(),
  is_active: yup.boolean(),
});
