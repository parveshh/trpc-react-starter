import * as jwt from "jose";
import { TokenPayload } from "src/types";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
let authTokenKeys: { publicKey: jwt.KeyLike; privateKey: jwt.KeyLike } | null =
  null;
let refreshTokenKeys: {
  publicKey: jwt.KeyLike;
  privateKey: jwt.KeyLike;
} | null = null;

import { Constructor } from "../types";

export const classInstanceOf = <T>(
  obj: unknown,
  type: Constructor<T>
): obj is T => obj instanceof type;

const generateAuthToken = async (
  payload: TokenPayload,
  alg: "RS256" | "HS256" = "RS256"
) => {
  const {
    authTokenKeys: { privateKey },
  } = await getKeys();
  return new jwt.SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer("http://trpc_react_starter") // change to your domain
    .setAudience("starterApp")
    .setExpirationTime("2h")
    .sign(privateKey);
};

const verifyAuthToken = async (token: string) => {
  const {
    authTokenKeys: { publicKey },
  } = await getKeys();
  const { payload } = await jwt.jwtVerify(token, publicKey, {
    issuer: "http://trpc_react_starter",
    audience: "starterApp",
  });

  return payload as TokenPayload;
};

const generateRefreshToken = async (
  payload: TokenPayload,
  alg: "RS256" | "HS256" = "RS256"
) => {
  const {
    refreshTokenKeys: { privateKey },
  } = await getKeys();

  return new jwt.SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer("http://trpc_react_starter") // change to your domain
    .setAudience("starterApp")
    .setExpirationTime("2h")
    .sign(privateKey);
};

const verifyRefreshToken = async (token: string) => {
  const {
    refreshTokenKeys: { publicKey },
  } = await getKeys();
  const { payload } = await jwt.jwtVerify(token, publicKey, {
    issuer: "http://trpc_react_starter",
    audience: "starterApp",
  });

  return payload as TokenPayload;
};

const getKeys = async () => {
  if (authTokenKeys && refreshTokenKeys) {
    return { authTokenKeys, refreshTokenKeys };
  }

  const publicAuthKey = await fs.readFile(
    path.join(__dirname, "../../assets/publicAuth.key"),
    { encoding: "utf-8" }
  );
  const privateAuthKey = await fs.readFile(
    path.join(__dirname, "../../assets/privateAuth.key"),
    { encoding: "utf-8" }
  );

  const publicRefreshKey = await fs.readFile(
    path.join(__dirname, "../../assets/publicRefresh.key"),
    { encoding: "utf-8" }
  );
  const privateRefreshKey = await fs.readFile(
    path.join(__dirname, "../../assets/privateRefresh.key"),
    { encoding: "utf-8" }
  );

  authTokenKeys = {
    publicKey: await jwt.importSPKI(publicAuthKey, "RS256"),
    privateKey: await jwt.importPKCS8(privateAuthKey, "RS256"),
  };
  refreshTokenKeys = {
    publicKey: await jwt.importSPKI(publicRefreshKey, "RS256"),
    privateKey: await jwt.importPKCS8(privateRefreshKey, "RS256"),
  };
  return { authTokenKeys, refreshTokenKeys };
};

const createSHAHash = (data: string): string => {
  const hash = crypto.createHash("sha256");
  hash.update(data);
  return hash.digest("hex");
};

export {
  generateAuthToken,
  verifyAuthToken,
  generateRefreshToken,
  verifyRefreshToken,
  createSHAHash,
};
