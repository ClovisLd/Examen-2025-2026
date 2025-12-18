import { int } from "drizzle-orm/mysql-core";
import { boolean, numeric, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const reservationsTable = pgTable("Reservation", {
  id: uuid().defaultRandom().primaryKey(),
  title: text().notNull(),
  date: text().notNull(),
  phone: text().notNull(),
  people: text().notNull(),
});
