import { pgTable, integer, varchar, jsonb } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const urls = pgTable("urls", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "users_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	url: varchar({ length: 255 }).notNull(),
	description: varchar({ length: 255 }),
	tags: jsonb(),
});
