pipeline {
    agent { docker { image 'node:14-alpine' } }
    environment {
        REGISTRY = "http://localhost:4873"
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
                    //def remVersion = sh "npm view . version --registry=${REGISTRY}"
                    //echo "this is remote version: ${remVersion}"
                    sh "npm publish"
                }
            }
        }
    }
}

