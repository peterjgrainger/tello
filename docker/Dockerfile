FROM node:alpine as build-stage

RUN apk update && \
    apk add --no-cache --virtual .gyp \
        python \
        make \
        g++


RUN mkdir -p /opt/build

WORKDIR /opt/build

COPY package.json /opt/build/

RUN npm install

COPY / /opt/build/

RUN npm run build

FROM node:alpine

RUN mkdir -p /opt/app/

WORKDIR /opt/app

ENV NODE_ENV=production

COPY package.json /opt/app/

RUN npm install

COPY --chown=node:node --from=build-stage /opt/build/js/ /opt/app/

USER node

EXPOSE 3000

CMD ["node", "server/express-app.js"]
