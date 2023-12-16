import { User, UserDb } from "@app/schemas";
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

  async createUser(userInput: User) {
    this.logger.debug("Creating user");
    const [result] = await this.sql<
      [UserDb]
    >`INSERT INTO users (email, password, details) VALUES (${
      userInput.email
    }, ${userInput.password}, ${this.sql.json(userInput.details)}) RETURNING *`;
    this.logger.debug("User created");
    return result;
  }

  async getUser(email: string) {
    this.logger.debug("Getting user");
    const [result] = await this.sql<
      [User]
    >`SELECT user_id, email, password, details FROM users WHERE email = ${email}`;

    return result;
  }

  async markUserAsVerified(userId: string) {
    this.logger.debug("Marking user as verified", { userId });
    await this.sql<
      [UserDb]
    >`UPDATE users SET is_active = true WHERE user_id = ${userId}`;
  }
}
