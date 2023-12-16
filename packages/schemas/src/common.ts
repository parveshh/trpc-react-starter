import { Type } from "@sinclair/typebox";

export const DBSchema = Type.Object({
  created_at: Type.String({ format: "date-time" }),
  updated_at: Type.String({ format: "date-time" }),
  is_active: Type.Boolean(),
});

export const DBSchemaOptional = Type.Optional(DBSchema);
