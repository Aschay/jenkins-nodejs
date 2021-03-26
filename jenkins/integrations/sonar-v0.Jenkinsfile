node {
    stage('cloning-repo') {
        git url: 'https://github.com/Aschay/simple-nodejs-jenkins.git'
    }

  stage('building') {
    nodejs(nodeJSInstallationName: 'nodejs') {
      sh 'npm install -f '
    }
  }
    stage('sonar-scanner') {
      def sonarqubeScannerHome = tool name: 'sonar', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
      withCredentials([string(credentialsId: 'sonar', variable: 'sonarLogin')]) {
        sh "${sonarqubeScannerHome}/bin/sonar-scanner \
          -e -Dsonar.host.url=http://your-remote-ip-here\
          -Dsonar.login=${sonarLogin} \
          -Dsonar.projectName=jenkins-nodejs \
          -Dsonar.projectVersion=${env.BUILD_NUMBER} \
          -Dsonar.projectKey=JNODEJS -Dsonar.sources=. \
          -Dsonar.language=js \
          -Dsonar.sourceEncoding=UTF-8 \
          -Dsonar.exclusions=node_modules/*"
      }
    }

  stage('test') {
    nodejs(nodeJSInstallationName: 'nodejs') {
      sh 'npm install --only=dev'
      sh 'npm test -- test/test'
    }
  }
}