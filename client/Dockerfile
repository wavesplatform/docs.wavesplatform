FROM node:11.13.0-alpine
WORKDIR /app

COPY ./ /app

RUN rm -rf node_modules && \
    npm i -g yarn && \
    yarn && \
#    yarn global add serve && \
RUN cd ./packages/docs/ && \
    yarn dev





