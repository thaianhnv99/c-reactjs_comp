pipeline {
    agent {
        label "inbound-agent"
    }
    environment {
        CI = 'false'
        HOME = '.'
        YOUR_BUCKET_REGION = 'us-east-1'
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
                yarn -v
                ssh-agent
                '''
            }
        }
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/thaianhnv99/c-reactjs_comp.git'
            }
        }
        // stage('Build docker') {
        //     steps {
        //         withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
        //             // dir('C:/home/directory/workspace/c-reactjs-comp/cicd') {
        //                 bat 'docker build -t thainv99/react-app:v1 .'
        //                 bat 'docker push thainv99/react-app:v1'
        //             // }
        //         }
        //     }
        // }
        // stage('Build') {
        //     steps {
        //         bat 'yarn'
        //         bat 'yarn build'
        //     }
        // }
        // stage('Deploy to S3') {
        //     steps {
        //         withAWS(region:YOUR_BUCKET_REGION,credentials:CREDENTIALS_FROM_JENKINS_SETUP) {
        //             s3Delete(bucket: YOUR_BUCKET_NAME, path: '**/*')
        //             s3Upload(bucket: YOUR_BUCKET_NAME, workingDir: 'build', includePathPattern: '**/*');
        //         }
        //     }
        // }
        stage('Login to EC2 & build') {
            steps {
                script {
                    sshagent(credentials: ['54.159.155.25']) {
                        sh """
                            ssh -o StrictHostKeyChecking=no -i C:/Users/Admin/Desktop/key_c_reactjs.pem ec2-user@54.159.155.25 "echo \\\"${deploying}\\\" > deploy.sh && chmod +x deploy.sh && ./deploy.sh"
                        """                  
                    }
                // sshagent(['54.159.155.25']) {
                    // bat '''
                    // ssh -tt -i C:/Users/Admin/Desktop/key_c_reactjs.pem -o StrictHostKeyChecking=no ec2-user@ec2-54-159-155-25.compute-1.amazonaws.com
                    // ls
                    // '''
                }
            }
        }
    }
}