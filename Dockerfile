FROM node:13.8.0-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache bash git
WORKDIR /app
COPY ./ /app
#ENV NODE_OPTIONS="--max-old-space-size=8096"
RUN yarn && \
    yarn build

ENTRYPOINT yarn server

