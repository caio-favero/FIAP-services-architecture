FROM node:14-alpine

WORKDIR /node-app

COPY package.json .

RUN npm install --quiet

RUN npm install nodemon -g --quiet

COPY . . 

EXPOSE 8000

CMD nodemon -L --watch . index.js
