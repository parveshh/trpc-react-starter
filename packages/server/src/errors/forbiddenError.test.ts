import { ForbiddenError } from "./forbiddenError";

describe("ForbiddenError", () => {
  it("should have message", () => {
    const message = "Some Error";
    const throwError = () => {
      throw new ForbiddenError(message);
    };

    try {
      throwError();
    } catch (e: ForbiddenError | unknown) {
      if (!(e instanceof ForbiddenError)) {
        throw e;
      }
      expect(e.message).toBe(message);
      expect(e.code).toBe("FORBIDDEN");
      expect(e).toBeInstanceOf(ForbiddenError);
    }
  });
});
