import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { t } from "./src/trpc";
import fastify from "fastify";
import { router } from "./src/trpc";
import config from "./src/config";

const app = fastify();


