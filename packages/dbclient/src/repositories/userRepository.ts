import { UserSchemaType, UserDbSchemaType } from "@app/schemas";
import sql, { Sql } from "postgres";
import { LoggerOf } from "../utils";
import pino from "pino";

export class UserRepository {
  private readonly logger: pino.Logger;
  private readonly sql: Sql;
  constructor(sql: Sql, logger = LoggerOf("UserRepository")) {
    this.logger = logger;
    this.sql = sql;
    this.logger.debug("UserRepository created");
  }

  async createUser(userInput: UserSchemaType) {
    this.logger.debug("Creating user");
    const [result] = await this.sql<
      [UserDbSchemaType]
    >`INSERT INTO users (email, password, details) VALUES (${
      userInput.email
    }, ${userInput.password}, ${this.sql.json(userInput.details)}) RETURNING *`;
    this.logger.debug("User created");
    return result;
  }

  async getUser(email: string) {
    this.logger.debug("Getting user");
    const [result] = await this.sql<
      [UserSchemaType]
    >`SELECT id, email, password, details FROM users WHERE email = ${email}`;

    return result;
  }

  async signIn(email: string, password: string) {
    this.logger.debug("Signing in user");
    const [result] = await this.sql<
      [UserDbSchemaType]
    >`SELECT id, email, details FROM users WHERE email = ${email} AND password = ${password}`;
    this.logger.debug("User signed in");
    return result;
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    this.logger.debug("Updating refresh token");
    await this.sql<
      [UserDbSchemaType]
    >`UPDATE users SET details = details || ${this.sql.json({
      refreshToken,
    })} WHERE id = ${userId}`;
    this.logger.debug("Refresh token updated");
  }

  async getUserById(userId: string) {
    this.logger.debug("Getting user by id", { userId });
    const [result] = await this.sql<
      [Omit<UserDbSchemaType, "password">]
    >`SELECT id, email, details FROM users WHERE id = ${userId}`;

    return result;
  }

  async markUserAsVerified(userId: string) {
    this.logger.debug("Marking user as verified", { userId });
    await this.sql<
      [UserDbSchemaType]
    >`UPDATE users SET is_active = true WHERE id = ${userId}`;
  }
}
