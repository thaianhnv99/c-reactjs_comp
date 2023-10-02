pipeline {
    agent {
        label "inbound-agent"
    }
    environment {
        HOME = '.'
        npm_config_cache = 'npm-cache'
        YOUR_BUCKET_REGION = 'Global'
        CREDENTIALS_FROM_JENKINS_SETUP = 'c-reactjs-comp-aws'
        YOUR_BUCKET_NAME = 'c-reactjs-comp'
    }

    stages {
        // stage ('Git Checkout') {
        //     steps {
        //         git branch: 'main', url: 'https://github.com/thaianhnv99/c-reactjs_comp.git'
        //     }
        // }
        stage('Tooling versions') {
            steps {
                bat '''
                docker --version
                docker compose version
                node -v
                '''
            }
        }
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/thaianhnv99/c-reactjs_comp.git'
            }
        }
        stage('Build docker') {
            steps {
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                    bat 'docker build -t thainv99/react-app:v1 .'
                    bat 'docker push thainv99/react-app:v1'
                }
            }
        }
        stage('Development') {
            steps {
                withAWS(region:${env.YOUR_BUCKET_REGION},credentials:${env.CREDENTIALS_FROM_JENKINS_SETUP}) {
                    s3Delete(bucket: ${env.YOUR_BUCKET_NAME}, path:'**/*')
                    s3Upload(bucket: ${env.YOUR_BUCKET_NAME}, workingDir:'build', includePathPattern:'**/*');
                }
            }
        }
    }
}