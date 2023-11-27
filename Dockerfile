FROM node:18-alpine

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm install --frozen-lockfile

COPY --chown=node:node . .

USER node

CMD [ "npm", "start" ]

