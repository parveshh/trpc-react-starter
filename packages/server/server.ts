import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";

import config from "./src/config";
import { appRouter } from "./src/routes";
import { createContext } from "./src/context";
import fastifyCors from "@fastify/cors";
const server = fastify();

(async () => {
  try {
    await server.register(fastifyTRPCPlugin, {
      prefix: "/trpc",
      logger: true,
      trpcOptions: { router: appRouter, createContext, loglevel: "debug" },
    });

    await server.register(fastifyCors, {
      origin: true,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    });

    await server.listen({ port: config.PORT, host: "0.0.0.0" });
    console.log("running back end on port", config.PORT);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
