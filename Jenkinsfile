pipeline {
    agent {
        docker
          {
            image 'maven:3-alpine'
            args '-u root -p 8081:8081 -v /var/run/docker.sock:/var/run/docker.sock  '
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
                    sh 'docker build -t thainv99/react-app:v1 .'
                    sh 'docker push thainv99/react-app:v1'
                }
            }
        }
    }
}