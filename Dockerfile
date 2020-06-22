FROM node:14.0.0

RUN mkdir /home/node/ejercicio-csw
WORKDIR /home/node/ejercicio-csw
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build
RUN npm i forever -g
CMD forever server.js
