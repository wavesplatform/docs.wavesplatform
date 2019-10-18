FROM node:11.13.0-alpine
WORKDIR /app
COPY ./ /app
RUN yarn
ENTRYPOINT yarn build && yarn production-server
