node {

   stage('test') {
     nodejs(nodeJSInstallationName: 'nodejs') {
       sh 'npm install --only=dev'
       sh 'npm test  '
     }
   }

   stage('test-db') {
    def db = docker.image('db:v0').run('--name db -p 27017:27017')
    def appdbContainer = docker.image('node:14.16.0-alpine3.10')
      appdbContainer.pull()
      appdbContainer.inside("--link db:mongo") { 
           sh 'npm i & sleep 20s' 
           sh 'npm test -- test/test-app-db.js --timeout 10000 --exit'                     
      }                                   
     db.stop()
   }                                     
                                 
}                                          
