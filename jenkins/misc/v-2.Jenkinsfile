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
             sh 'npm start & echo $! > .pidfile & npm test & kill $(cat .pidfile)'
            }
        }
        stage('Deliver') {
            steps {
                sh 'npm start & echo $! > .pidfile2' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh 'kill $(cat .pidfile2)'
            }
        }
   
    }
    
}


