pipeline{
    agent any
    stages{
        stage("build"){
            steps{
                echo 'building app'
                sh 'npm i'
            }
        }
        stage("deploy") {
            steps {
                echo 'deploying app'
            }
        }
    }
}