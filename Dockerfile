FROM node:10

COPY package*.json /usr/src/
WORKDIR /usr/src
RUN npm install
RUN npm install -g nodemon
COPY . /usr/src/

EXPOSE 3001

CMD node index.js