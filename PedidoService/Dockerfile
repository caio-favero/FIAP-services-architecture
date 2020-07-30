FROM node:14-alpine

COPY package.json .

RUN npm install --quiet

RUN npm install nodemon -g --quiet

COPY . . 

EXPOSE 8000

CMD node index.js
