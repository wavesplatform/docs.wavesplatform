FROM node:13.8.0-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache bash git
WORKDIR /app
COPY ./ /app
RUN yarn && \
    yarn build

ENTRYPOINT yarn server

