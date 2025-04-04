import { Hono } from "hono";
import { cors } from "hono/cors";
import { graphql } from "ponder";
import { db } from "ponder:api";
import schema from "ponder:schema";
import { ALLOWED_ORIGINS } from "../constants/origins";
import { keyAuthMiddleware } from "../middleware/keyAuth";
import { rateLimitMiddleware } from "../middleware/rateLimit";

const app = new Hono();

// public testing
app.use("/", rateLimitMiddleware);
app.use("/", graphql({ db, schema }));

// origin restricted (internal apps)
app.use("/graphql", async (c, next) => {
  // only allow requests, not yoga UI (GET)
  if (c.req.method !== "POST") return c.text("Not allowed", 401);

  await next();
});
app.use("/graphql", cors({ origin: ALLOWED_ORIGINS }));
app.use("/graphql", graphql({ db, schema }));

// require key (internal dev, external apps)
app.use("/graphql/:key", keyAuthMiddleware);
app.use("/graphql/:key", graphql({ db, schema }));

export default app;
