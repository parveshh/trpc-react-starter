jest.mock("@app/dbclient", () => ({
  UserRepository: jest.fn().mockImplementation(() => ({
    getUserById: jest.fn().mockResolvedValue({}),
  })),
}));
import { mockPg } from "src/utils/mockPostgres";
import sql from "postgres";
import { UserRepository } from "@app/dbclient";
import { isAuthenticated } from "./isAuthenticated";
import { router } from "../trpc";
import {} from "@trpc/server/adapters/fastify";

describe("isAuthenticated middleware", () => {
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
    sqlMock.json = jest
      .fn()
      .mockImplementation((value) => JSON.stringify(value));
  });

  it("should return 401 if user is not authenticated", async () => {});
  // Add more test cases as needed
});
