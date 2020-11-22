FROM node:15.2.1-alpine3.10

WORKDIR /usr/src/app

COPY ./app .

RUN npm install

CMD [ "npm", "start" ]