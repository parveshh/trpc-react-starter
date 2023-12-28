import { ConflictError } from "./conflictError";

describe("ConflictError Tests", () => {
  it("should have error message", () => {
    const message = "Some Error";
    const throwError = () => {
      throw new ConflictError(message);
    };
    try {
      throwError();
    } catch (e: ConflictError | unknown) {
      if (!(e instanceof ConflictError)) {
        throw e;
      }
      expect(e.message).toBe(message);
      expect(e.code).toBe("CONFLICT");
      expect(e).toBeInstanceOf(ConflictError);
    }
  });
});
