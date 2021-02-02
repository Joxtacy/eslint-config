pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '--network="host"' // makes sure the docker in docker can connect to the outside network, which is still in the outer container.
        }
    }
    environment {
        REGISTRY = "http://verdaccio:4873" // this is verdaccio because that is the alias of that container
    }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
        stage('check version') {
            steps {
                script {
                    def packageJSON = readJSON file: "./package.json"
                    def version = packageJSON.version
                    echo "this is version in package.json: ${version}"
                    def remVersion = sh(returnStdout: true, script: "npm view . version --registry=${REGISTRY}").trim()
                    echo "this is remote version: ${remVersion}"
                    if (version == remVersion) {
                        error("Version is not bumped")
                    } else {
                        echo "We are good to go for publish"
                    }
                }
            }
        }
        stage('publish') {
            steps {
                withCredentials([string(credentialsId: 'verdaccio-publish', variable: 'TOKEN')]) {
                    sh "echo //verdaccio:4873/:_authToken=${TOKEN} > .npmrc"
                    sh "npm publish" // needs authtoken. How to add that to jenkins and fetch it for publish?
                    sh "rm .npmrc"
                }
            }
        }
    }
}

