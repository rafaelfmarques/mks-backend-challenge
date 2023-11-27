FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk --no-cache add openssl

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]