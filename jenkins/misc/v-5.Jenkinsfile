pipeline{
  agent {
    // Equivalent to "docker build -f Dockerfile.build --build-arg version=1.0 .
    dockerfile {
        filename 'v-1.Dockerfile'
        dir '.'
        additionalBuildArgs  '--build-arg version=1.0'
    }
  }
   stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
    post { 
        always { 
            echo 'I will always say Hello again!'
        }
    }
}