FROM node:18-alpine as base
RUN apk update && apk upgrade && apk add bash

WORKDIR /app/


COPY package.json yarn.lock ./
COPY packages/dbclient/package.json ./packages/dbclient/
COPY packages/schemas/package.json ./packages/schemas/
COPY packages/server/package.json ./packages/server/


RUN yarn install

FROM base as source

COPY packages/dbclient ./packages/dbclient
COPY packages/schemas ./packages/schemas
COPY packages/server ./packages/server


FROM source as build

RUN yarn dbclient:build
RUN yarn workspace server build
COPY packages/server/.env.production ./packages/server/.env
COPY packages/server/assets ./packages/server/dist/assets
RUN rm -rf node_modules packages/*/node_modules

RUN yarn install --production


WORKDIR /app/packages/server
EXPOSE 3000
CMD ["node", "."]


