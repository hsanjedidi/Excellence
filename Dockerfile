FROM node:22.14.0-alpine AS web_build

RUN corepack enable && corepack prepare pnpm@10.33.0 --activate

WORKDIR /app

ARG VITE_NODE_ENV=production

COPY ./package.json ./pnpm-lock.yaml ./pnpm-workspace.yaml ./

RUN pnpm install 

COPY . .

RUN pnpm build


FROM caddy:2.6.2-alpine

COPY --from=web_build /app/dist /srv/web