pipeline {
agent any
stages {
 stage("cloning-repository") {
 steps {
        script {
           git  url: 'https://github.com/Aschay/simple-nodejs-jenkins.git'
          }
       }
 }
   stage("Build") {
   steps {
       nodejs(nodeJSInstallationName: 'nodejs'){
           sh "npm install -f "
           }
       }
   }
    stage('code-quality-check') {
   steps {
       script {
       def scanner = tool name: 'sonar', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
        withCredentials([string(credentialsId: 'sonar', variable: 'sonarLogin')]) {
           sh "${scanner}/bin/sonar-scanner \
           -Dsonar.projectName=jenkins-pipeline-nodejs \
           -Dsonar.projectKey=JPINODE \
           -Dsonar.exclusions=node_modules/* \
           -Dsonar.projectVersion=${env.BUILD_NUMBER} \
           -Dsonar.language=js. \
           -Dsonar.host.url=http://your-remote-ip-here \
           -Dsonar.login=${sonarLogin}"
               }
           }
       }
   }
}
}