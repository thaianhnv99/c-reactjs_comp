pipeline {
    agent any
    stages {
        // stage ('Git Checkout') {
        //     steps {
        //         git branch: 'main', url: 'https://github.com/thaianhnv99/c-reactjs_comp.git'
        //     }
        // }
        stage('Clone') {
            steps {
                git 'https://github.com/thaianhnv99/c-reactjs_comp.git'
            }
        }
    }
}