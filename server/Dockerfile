FROM node:11.13.0-alpine
WORKDIR /app

RUN apk add --update \
    bash \
    lcms2-dev \
    libpng-dev \
    gcc \
    g++ \
    make \
    autoconf \
    automake \
    libtool \
  && rm -rf /var/cache/apk/*

COPY ./ /app

RUN  rm -rf node_modules
RUN  yarn global add strapi@beta
RUN  yarn
RUN  yarn build

ENTRYPOINT yarn start
