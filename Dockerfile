# Dockerfile from https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:10

WORKDIR /usr/src/app

COPY dist/ ./dist/

COPY server/ ./server/

COPY index.js ./

COPY package*.json ./

RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]