FROM mongo:latest
ADD  mongo-init.js /docker-entrypoint-initdb.d/
#docker run -d -p 27017:27017 --name db  testmongo:v0