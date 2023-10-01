pipeline {
    agent {
        label "inbound-agent"
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
                withDockerRegistry(credentialsId: 'docker', url: 'https://index.docker.io/v1/') {
                    bat 'docker build -t thainv99/react-app:v1 .'
                    bat 'docker push thainv99/react-app:v1'
                }
            }
        }
    }
}