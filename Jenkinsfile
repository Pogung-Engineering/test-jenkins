pipeline{
    agent any
    stages{
        stage("build"){
            steps{
                echo 'building app'
                script{
                    def test = 2+2>3 ? 'cool' : 'normal'
                    echo test
                }
            }
        }
        stage("deploy") {
            steps {
                echo 'deploying app'
            }
        }
    }
}