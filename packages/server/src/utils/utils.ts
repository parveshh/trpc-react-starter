import * as jwt from "jose";
import { TokenPayload } from "src/types";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
let authTokenKeys: { publicKey: Buffer; privateKey: Buffer } | null = null;
let refreshTokenKeys: { publicKey: Buffer; privateKey: Buffer } | null = null;

const generateAuthToken = async (
  payload: TokenPayload,
  alg: "RSA256" | "HS256" = "RSA256"
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
  alg: "RSA256" | "HS256" = "RSA256"
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
    path.join(__dirname, "../../assets/publicAuth.key")
  );
  const privateAuthKey = await fs.readFile(
    path.join(__dirname, "../../assets/privateAuth.key")
  );

  const publicRefreshKey = await fs.readFile(
    path.join(__dirname, "../../assets/publicRefresh.key")
  );
  const privateRefreshKey = await fs.readFile(
    path.join(__dirname, "../../assets/privateRefresh.key")
  );
  authTokenKeys = {
    publicKey: publicAuthKey,
    privateKey: privateAuthKey,
  };
  refreshTokenKeys = {
    publicKey: publicRefreshKey,
    privateKey: privateRefreshKey,
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
