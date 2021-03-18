pipeline {
    agent any
    environment {
        CI = 'true' 
    }
    try{ 
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
    }
    catch(e){
    currentBuild.result = "FAILURE";
    slackSend (color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
    throw e;
  }
}
