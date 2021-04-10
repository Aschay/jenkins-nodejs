pipeline {
    agent any

    stages {
        stage ('Cloning-repo') {
            steps {
               git url: 'https://github.com/Aschay/simple-nodejs-jenkins.git'
            }
        }

        stage ('Artifactory-configuration') {
            steps {
                rtServer (
                    id: "aschay.jfrog.io",
                )

                rtNpmResolver (
                    id: "NPM_RESOLVER",
                    serverId: "aschay.jfrog.io",
                    repo: "test-npm-remote"
                )

                rtNpmDeployer (
                    id: "NPM_DEPLOYER",
                    serverId: "aschay.jfrog.io",
                    repo: "test-npm-local"
                )
            }
        }

        stage ('Building') {
            steps {
                rtNpmInstall (
                    tool: "nodejs", 
                    //path: "npm-example",
                    resolverId: "NPM_RESOLVER"
                )
            }
        }

        stage ('publishing') {
            steps {
                rtNpmPublish (
                    tool: "nodejs", // Tool name from Jenkins configuration
                    //path: "npm-example",
                    deployerId: "NPM_DEPLOYER"
                )
            }
        }

        stage ('Publish-build-info') {
            steps {
                rtPublishBuildInfo (
                    serverId: "aschay.jfrog.io"
                )
            }
        }
    }
}