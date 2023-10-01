pipeline {
    agent {
        label "inbound-agent"
    }
    environment {
        PATH = "$PATH:/path/to/nohup"
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
                node -v
                '''
            }
        }
        stage('Clone 123') {
            steps {
                git branch: 'main', url: 'https://github.com/thaianhnv99/c-reactjs_comp.git'
            }
        }
        // stage('Build docker') {
        //     steps {
        //         withDockerRegistry(credentialsId: 'docker', url: 'https://index.docker.io/v1/') {
        //             sh 'docker build -t thainv99/react-app:v1 .'
        //             sh 'docker push thainv99/react-app:v1'
        //         }
        //     }
        // }
    }
}