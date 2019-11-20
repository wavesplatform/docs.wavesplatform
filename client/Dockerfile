FROM node:11.13.0-alpine
WORKDIR /app
COPY ./ /app
RUN rm -rf node_modules && \
    yarn global add vuepress && \
    yarn && \
    yarn run buildW

ENTRYPOINT yarn run production-server
