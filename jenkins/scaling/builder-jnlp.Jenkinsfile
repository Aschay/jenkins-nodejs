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
        stage('Test-on-windows-slave') {
            agent { 
                label 'builder-jnlp'
            }
            steps {
                bat 'echo "hello from slave node" '
            }
           
        }
        
    }
}
