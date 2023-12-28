import { BadRequestError } from "./badRequestError";

describe("BadRequestError", () => {
  it("should be instance of Error", () => {
    expect(new BadRequestError("")).toBeInstanceOf(Error);
  });

  it("should have message", () => {
    const message = "Some Error";
    const throwError = () => {
      throw new BadRequestError(message);
    };

    try {
      throwError();
    } catch (e: BadRequestError | unknown) {
      if (!(e instanceof BadRequestError)) {
        throw e;
      }
      expect(e.message).toBe(message);
      expect(e.code).toBe("BAD_REQUEST");
      expect(e).toBeInstanceOf(BadRequestError);
    }
  });
});
