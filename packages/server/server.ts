import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import config from "./src/config";
import { createContext } from "./src/context";
import fastifyCors from "@fastify/cors";
import { appRouter } from "./src/routes";
import fs from "fs";
import * as jose from "jose";
const server = fastify();

// const writeKeyPair = async () => {
//   const { publicKey, privateKey } = await jose.generateKeyPair("RS256", {
//     modulusLength: 2048,
//     extractable: true,
//   });
//   const privateKeyString = await jose.exportPKCS8(privateKey);
//   const publicKeyString = await jose.exportSPKI(publicKey);
//   fs.writeFileSync("./private.pem", privateKeyString);
//   fs.writeFileSync("./public.pem", publicKeyString);
// };
// writeKeyPair();

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
