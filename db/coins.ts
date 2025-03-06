import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const countries = pgTable("countries", {
  id: serial("id").primaryKey(),
  name: text("name").unique().notNull(),
});

export const coin = pgTable("coin", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  countryId: integer("country_id")
    .notNull()
    .references(() => countries.id),
});
