import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Hello from Hono!",
  });
});

app.post(`/`, async (c) => {
  const body = await c.req.json();
  console.log(body);
  return c.json({
    message: c.req.method,
    name: body.name,
  });
});

export const hellos =  app;