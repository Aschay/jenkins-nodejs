pipeline {

    agent any
    
    environment {
        CI = 'true' 
    } 

    tools {nodejs "nodejs"} 

    stages {
        stage('Build') { 
            steps{
             sh 'npm install'
            }
        }
          stage('Run') { 
            steps{
             sh 'node app.js & sleep 1m '
             sh'echo $! > .pidfile' 
            }
        }
        stage ('Test'){
            steps{
             sh 'npm test'
             sh 'kill $(cat .pidfile)'
            }
        }
        stage('Deliver') {
            steps {
                sh 'npm start '
                sh'echo $! > .pidfile' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh 'kill $(cat .pidfile)'
            }
        }
   
    }
    
}


