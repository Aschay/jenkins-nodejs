FROM node:14.16.0-alpine3.10 
WORKDIR /app
ADD . /app
RUN npm i -f
EXPOSE 3000 3001
CMD  node app-db.js
