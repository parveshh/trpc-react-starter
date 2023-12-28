import { TSchema } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
//https://github.com/trpc/trpc/issues/2453
export function Compile<T extends TSchema>(
  schema: T,
  references: TSchema[] = []
) {
  const check = TypeCompiler.Compile(schema, references);
  return (input: unknown) => {
    if (check.Check(input)) return input;
    throw Error("Invalid Input");
  };
}
export * from "./src/server/env";
export * from "./src/user";
