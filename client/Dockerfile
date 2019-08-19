FROM node:11.13.0-alpine
WORKDIR /app

COPY ./ /app

RUN rm -rf node_modules && \
    yarn && \
    cd ./packages/docs/ && \
    yarn dev





