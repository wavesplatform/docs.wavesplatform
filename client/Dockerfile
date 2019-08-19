FROM node:11.13.0-alpine
WORKDIR /app

COPY ./ /app

RUN rm -rf node_modules && \
   yarn
ENTRYPOINT cd packages/docs/ && yarn dev





