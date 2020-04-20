pipeline {

    agent any

    stages {
        stage('TTS Maven Build') {
            steps {
                dir ('texttospeech'){
                    echo 'Packaing WAR with Maven'
                    sh 'mvn package -Pprod'
                }
            }
        }

        stage('TTS Deploy to Tomcat') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'master') {
                        echo 'Master branched detected, deploying to tomcat master container'
                        sh 'scp -P 2225 ./texttospeech/target/tts-0.0.1-SNAPSHOT.war aaronmao@thinkpad.kentailab.org:/home/aaronmao/webapps/tts.war'
                    } else if (env.BRANCH_NAME == 'development') {
                        echo 'Master branched detected, deploying to tomcat development container'
                        sh 'scp -P 2225 ./texttospeech/target/tts-0.0.1-SNAPSHOT.war aaronmao@thinkpad.kentailab.org:/home/aaronmao/webapps/tts-dev.war'
                    }
                }
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: '**/*SNAPSHOT*', fingerprint: true
        }
    }
}