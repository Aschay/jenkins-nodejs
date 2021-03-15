node {

   stage('test-db') {
 
     def db = docker.image('mongo:latest').run(" --name db -e MONGO_INITDB_DATABASE=nodedb -p 27017:27017 -v /mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro ")
     def appdbContainer = docker.image('node:14.16.0-alpine3.10')
      appdbContainer.pull()
      appdbContainer.inside(" --link db:mongo ") { 
           sh 'npm i' 
           sh 'npm test -- test/test-app-db'                     
      }                                   
     db.stop()
   }                                     
                                 
}                                          
