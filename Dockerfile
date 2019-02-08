FROM node:10

COPY package*.json /usr/src
WORKDIR /usr/src
RUN npm install
COPY . /usr/src

EXPOSE 5000

CMD node server.js