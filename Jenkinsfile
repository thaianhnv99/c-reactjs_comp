pipeline {
    agent {
        // node {
        //     label 'docker-pipeline'
        // }
        docker {                     // We want to use docker for this
            image 'alpine'           // The docker image to run in
            label 'docker-pipeline'  // Use a node/agent with these labels
            args '-u root:sudo'      // Add this to be root in the container
        }
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
            steps {
                withDockerRegistry(credentialsId: 'docker', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t thainv99/react-app:v1 .'
                    sh 'docker push thainv99/react-app:v1'
                }
            }
        }
    }
}