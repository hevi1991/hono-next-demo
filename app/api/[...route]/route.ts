import { Hono } from "hono";
import { handle } from "hono/vercel";
import { logger } from "hono/logger";
import { db } from "@/src/db";

// export const runtime = "edge";

const app = new Hono().basePath("/api");

// 中间件

app.use(logger());
app.use(async (_, next) => {
  console.log("middleware 1 start");
  let log = await db.runLog.create({});
  await next();
  log = await db.runLog.update({
    where: { id: log.id },
    data: { updatedAt: new Date() },
  });
  console.log("middleware 1 end", log.id);
});
app.use(async (_, next) => {
  console.log("middleware 2 start");
  await next();
  console.log("middleware 2 end");
});


//  路由

app.get("/hello", (c) => {
  return c.json({
    message: "Hello from Hono!",
  });
});

app.post(`/hello`, async (c) => {
  const body = await c.req.json();
  console.log(body);
  return c.json({
    message: c.req.method,
    name: body.name,
  });
});

const handler = handle(app);

export const GET = handler;
export const POST = handler;
