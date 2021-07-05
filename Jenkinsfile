pipeline{
    agent any
    stages{
        stage("build"){
            steps{
                echo 'building app'
                sh 'npm install'
            }
        }
        stage("deploy") {
            steps {
                echo 'deploying app'
            }
        }
    }
}