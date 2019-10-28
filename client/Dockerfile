FROM node:11.13.0-alpine
WORKDIR /app
COPY ./ /app
RUN rm -rf node_modules && \
    yarn && \
    yarn run build

#ENTRYPOINT yarn run production-server
ENTRYPOINT isDev=true yarn dev && yarn production-server:dev
