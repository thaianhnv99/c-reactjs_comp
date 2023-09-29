pipeline {
    agent any
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
        stage('Install Packages') {
            steps {
                sh 'yarn'
            }
        }
        stage('Test and Build') {
            parallel {
                stage('Run Tests') {
                    steps {
                        sh 'yarn run test'
                    }
                }
        stage('Create Build Artifacts') {
            steps {
                sh 'yarn run build'
            }
        }
            }
    }
}