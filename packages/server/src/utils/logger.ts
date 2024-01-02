import pino from "pino";
export const LoggerOf = (name: string) => pino({ name });
