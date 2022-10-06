FROM node:18-alpine3.15

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD [ "npm", "run", "serve" ]