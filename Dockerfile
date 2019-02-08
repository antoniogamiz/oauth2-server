FROM node:10

COPY package*.json /usr/src
WORKDIR /usr/src
RUN npm install
COPY . /usr/src

EXPOSE 3001

CMD node server.js