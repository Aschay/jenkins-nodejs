pipeline {
    agent {
       agent any
    }
    stages {
        stage('Build') { 
            nodejs(nodeJSInstallationName: 'nodejs') {
             sh 'npm install'
            }
        }
       
        stage ('Test'){
            nodejs(nodeJSInstallationName: 'nodejs') {
             sh 'npm start'   
             sh 'npm test'
            }
        }
    }
}

