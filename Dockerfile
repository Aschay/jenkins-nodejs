#FROM node:15.11.0-alpine3.13 for node 15.11.0 version
FROM node:14.16.0-alpine3.10 
WORKDIR /app
ADD . /app
RUN npm i -f
EXPOSE 3000 3001
CMD sleep 30s && npm test -- test/test-app-db.js
