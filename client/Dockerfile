FROM node:11.13.0-alpine
WORKDIR /app
COPY ./ /app
RUN rm -rf node_modules && \
    yarn && \
    yarn run build && \
    yarn run production-server:dev && \
    isDev=true yarn dev

