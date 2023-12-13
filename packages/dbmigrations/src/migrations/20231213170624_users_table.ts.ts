import type { Knex } from "knex";
import { Tablenames } from "../constants";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(Tablenames.USERS, (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid ()"));
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.jsonb("details").notNullable().defaultTo("{}");
    table.boolean("is_active").defaultTo(true);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(Tablenames.USERS);
}
