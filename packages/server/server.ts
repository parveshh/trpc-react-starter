import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";

import config from "./src/config";
import { appRouter } from "./src/routes";
import { createContext } from "./src/context";

const server = fastify();

server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  logger: true,
  trpcOptions: { router: appRouter, createContext, loglevel: "debug" },
});

(async () => {
  try {
    await server.listen({ port: config.PORT, host: "0.0.0.0" });
    console.log("running back end on port", config.PORT);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
