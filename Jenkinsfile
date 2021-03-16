node {
   stage('test-app') {
     def appContainer = docker.image('node:14.16.0-alpine3.10')
     appContainer.pull()
     appContainer.inside {
       sh 'npm i --only=dev'
       sh 'npm test -- test/test-app.js '
     }
   }
   stage('test-app-db') {
    def db = docker.image('db:v0').run('--name db -p 27017:27017')
    def appdbContainer = docker.image('node:14.16.0-alpine3.10')
      appdbContainer.pull()
      appdbContainer.inside("--link db:mongo") { 
           sh 'npm i --only=dev  & sleep 20s' 
           sh 'npm test -- test/test-app-db.js  --exit'                     
      }                                   
     db.stop()
   }  
     stage('test-all') {
    def dbAll = docker.image('db:v0').run('--name dbAll -p 27017:27017')
    def appAllContainer = docker.image('node:14.16.0-alpine3.10')
      appAllContainer.pull()
      appAllContainer.inside("--link dbAll:mongo") { 
           sh 'npm i --only=dev  & sleep 20s' 
           sh 'npm test  --exit'                     
      }                                   
     dbAll.stop()
   }                                    
                                 
}                                          
