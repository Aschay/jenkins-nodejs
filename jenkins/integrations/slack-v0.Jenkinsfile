pipeline {
    agent any
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') { 
            steps{
             sh 'echo "build"'
            }
        }
        stage ('Test'){
            steps{
             sh 'echo "test"'
            }
        }
    }
     post {
      always {     
          slackSend (color: "good", message: "SUCCESS: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
          }
    }
  }