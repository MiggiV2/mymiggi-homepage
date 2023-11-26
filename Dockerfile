FROM node:lts-slim as build-stage
WORKDIR /app
COPY package.json yarn.lock vite.config.js .
RUN yarn
COPY src src
RUN yarn run build

FROM nginx:alpine-slim as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf