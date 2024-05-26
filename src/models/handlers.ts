import { type LibSQLDatabase } from "drizzle-orm/libsql";
import { type Context, type RouteSchema } from "elysia";
import { type CookieSchema } from "./routes";
import { type Store } from "./store";

interface DbSchema {
  db: LibSQLDatabase;
}

export type HandlerContext<Schema extends RouteSchema = RouteSchema> = Context<
  Schema & CookieSchema
> &
  Store &
  DbSchema;
