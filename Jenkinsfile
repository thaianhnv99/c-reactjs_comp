pipeline {
    agent {
        docker { image 'node:18.18.0-alpine3.18' }
    }
    stages {
        // stage ('Git Checkout') {
        //     steps {
        //         git branch: 'main', url: 'https://github.com/thaianhnv99/c-reactjs_comp.git'
        //     }
        // }
        stage('Tooling versions') {
            steps {
                sh '''
                docker --version
                docker compose version
                '''
            }
        }
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/thaianhnv99/c-reactjs_comp.git'
            }
        }
        stage('Build docker') {
            agent {
                docker { image 'node:alpine' }
            }
            steps {
                withDockerRegistry(credentialsId: 'docker', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t thainv99/react-app:v1 .'
                    sh 'docker push thainv99/react-app:v1'
                }
            }
        }
    }
}