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
        stage ('Test'){
            steps{
             sh 'npm start & npm test '
             sh'echo $! > .pidfile'    
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


