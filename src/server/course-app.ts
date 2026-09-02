import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import type { Env } from "hono";

export { createRoute, z };

type AppInfo = {
  title: string;
  version: string;
  description?: string;
};

export function createApp<E extends Env = Env>(info: AppInfo): OpenAPIHono<E> {
  const app = new OpenAPIHono<E>();
  app.doc("/api/openapi.json", {
    openapi: "3.0.0",
    info: {
      title: info.title,
      version: info.version,
      description: info.description,
    },
  });
  return app;
}
