pipeline {
    agent {
        label "inbound-agent"
    }
    environment {
        HOME = '.'
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
                    // dir('/cicd') {
                    //     bat 'cd ./cicd & docker build -t thainv99/react-app:v1 .'
                    //     bat 'cd ./cicd & docker push thainv99/react-app:v1'
                    // }
                    bat '''
                    cd C:/home/directory/workspace/c-reactjs-comp 
                    build -t thainv99/react-app:v1 .
                    '''
                    bat 'docker push thainv99/react-app:v1'
                }
            }
        }
        // stage('Development') {
        //     steps {
        //         withAWS(region:YOUR_BUCKET_REGION,credentials:CREDENTIALS_FROM_JENKINS_SETUP) {
        //             s3Delete(bucket: YOUR_BUCKET_NAME, path: '**/*')
        //             // s3Upload acl: 'Private', bucket: 'c-reactjs-comp', cacheControl: '', excludePathPattern: '', file: '**/*', includePathPattern: '**/*', metadatas: [''], redirectLocation: '', sseAlgorithm: '', tags: '', text: '', workingDir: 'build'
        //             s3Upload(bucket: YOUR_BUCKET_NAME, workingDir: 'build', includePathPattern: '**/*');
        //         }
        //     }
        // }
    }
}