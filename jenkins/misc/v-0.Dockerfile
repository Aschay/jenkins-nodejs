#FROM node:15.11.0-alpine3.13 for node 15.11.0 version
FROM node:14.16.0-alpine3.10 
WORKDIR /app
ADD . /app
RUN npm i -f
EXPOSE 3000 
CMD  node app-db.js
