pipeline {
  agent {
    // Equivalent to "docker build -f Dockerfile.build --build-arg version=1.0 .
    dockerfile {
        filename 'v-0.Dockerfile'
        dir '.'
        label 'app'
        additionalBuildArgs  '--build-arg version=1.0'
    }
  }
}