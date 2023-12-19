function mockPostgres() {
  return [];
}
mockPostgres.json = jest.fn();
jest.mock("postgres", () => () => jest.fn(mockPostgres));

import { UserRepository } from "../repositories/userRepository";
import sql from "postgres";
import { User } from "@app/schemas";

describe("UserRepository", () => {
  let userRepository: UserRepository;

  let sqlMock: sql.Sql;
  const mockQuery = jest.fn();
  beforeEach(() => {
    sqlMock = sql({
      host: "localhost",
      port: 70000,
      database: "test",
      username: "test",
      password: "test",
    });
    sqlMock.json = jest.fn();
    userRepository = new UserRepository(sqlMock);
  });

  it("should create UserRepository instance", () => {
    expect(userRepository).toBeInstanceOf(UserRepository);
  });

  it("should create user", async () => {
    const userInput: User = {
      email: "test@test.com",
      password: "test",
      details: {
        firstName: "test",
        lastName: "test",
      },
    };
    await userRepository.createUser(userInput);
    expect(sqlMock).toHaveBeenCalled();
    expect(sqlMock.json).toHaveBeenCalledWith(userInput.details);
  });
});
