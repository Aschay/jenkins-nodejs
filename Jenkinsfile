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
             sh 'kill $(echo $!)' 
            }
        }
        stage('Deliver') {
            steps {
                sh 'npm start '
                sh ' pid : echo $! ' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh ' kill $(echo $!) '
            }
        }
   
    }
    
}


