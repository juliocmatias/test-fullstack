# Stage 1: Base
ARG NODE_IMAGE=node:22-alpine

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init g++ make py3-pip libc6-compat curl
RUN mkdir -p /home/node/app && chown node:node /home/node/app
WORKDIR /home/node/app
USER node

# Stage 2: Install dependencies
FROM base AS dependencies
COPY --chown=node:node ./package*.json ./
RUN npm ci
COPY --chown=node:node . .

# Stage 3: Build
FROM dependencies AS build
RUN npm run build

# Stage 4: Production
FROM base AS production
ENV NODE_ENV=production
ENV PORT=$FRONTEND_PORT
EXPOSE $FRONTEND_PORT

COPY --chown=node:node ./package*.json ./
RUN npm install --production
COPY --chown=node:node --from=build /home/node/app/.next ./.next
COPY --chown=node:node --from=build /home/node/app/public ./public
COPY --chown=node:node --from=build /home/node/app/next.config.mjs ./next.config.mjs

CMD [ "dumb-init", "npm", "start" ]
