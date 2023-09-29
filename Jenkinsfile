pipeline {
    agent {
        docker {
            image 'node:16-alpine' 
            args '-p 3000:3000' 
        }
    }
    // agent {
    //     node {
    //         label 'pipeline'
    //     }
    // }
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
    }
}