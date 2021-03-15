node {
   def commit_id
   stage('pre-test') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"                        
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('test') {
     nodejs(nodeJSInstallationName: 'nodejs') {
       sh 'npm install --only=dev'
       sh 'npm test -- test/test'
       
     }
   }
   stage('release') {
     docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
       def app = docker.build("aschay/pip-nodejs:${commit_id}", '.').push()
     }
   }
}
