node {
   def commit_id
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('test') {
     def testContainer = docker.image('node:14.16.0-alpine3.10')
     testContainer.pull()
     testContainer.inside {
       sh 'npm i'
       sh 'npm test -- test/test-app'
     }
   }
   stage('test-db') {
     //docker run -d --name mongodb -e MONGO_INITDB_DATABASE=nodedb -p 27017:27017  \
     // -v /$PWD/mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro    mongo:latest
     def mongodb = docker.image('mongo').run("-e MONGO_INITDB_DATABASE=nodedb -p 27017:27017 -v /mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro ") 
     def appdbContainer = docker.image('node:14.16.0-alpine3.10')
     appdbContainer.pull()
     appdbContainer.inside("--link ${mongodb.id}:mongo") { 
          sh 'npm i' 
          sh 'npm test -- test/test-app-db'                     
     }                                   
     mongodb.stop()
   }                                     
  //  stage('docker build/push') {            
  //    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
  //      def app = docker.build("aschay/pip-nodejs:${commit_id}", '.').push()
  //    }                                     
  //  }                                       
}                                          
