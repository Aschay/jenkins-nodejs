pipeline {
    agent none
    stages {
        stage('Build') {
            agent any
            steps {
               script {
               git  url: 'https://github.com/Aschay/simple-nodejs-jenkins.git'
               }
           }
        }
        stage('Test-on-linux-slave') {
            agent { 
                label 'builder-ssh'
            }
            steps {
                sh 'echo "hello from slave node" '
            }
           
        }
        
    }
}
