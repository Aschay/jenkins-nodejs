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
            slackNotif(currentBuild.currentResult)
            cleanWs()
        }
    }
}
