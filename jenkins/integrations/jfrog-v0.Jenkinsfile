node {
    def server
    def rtNpm = Artifactory.newNpmBuild()
    def buildInfo

    stage ('Cloning-repo') {
         git url: 'https://github.com/Aschay/simple-nodejs-jenkins.git'
    }

    stage ('Artifactory-configuration') {
        server = Artifactory.server "aschay.jfrog.io"
        rtNpm.tool = "nodejs"
        rtNpm.deployer repo: 'test-npm-local', server: server
        rtNpm.resolver repo: 'test-npm-remote', server: server
        buildInfo = Artifactory.newBuildInfo()
    }

    stage ('Building') {
        rtNpm.install buildInfo: buildInfo
    }
    
    stage ('Publish') {
        rtNpm.publish buildInfo: buildInfo
    }

    stage ('Publish-build-info') {
        server.publishBuildInfo buildInfo
    }
}
