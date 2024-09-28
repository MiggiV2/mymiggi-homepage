node {
  git branch: 'main', url: 'https://code.mymiggi.de/Miggi/mymiggi-homepage.git'
  withEnv(['ROOT_IMAGE=code.mymiggi.de/miggi/homepage']) {
    stage('Pulling base images') {
      sh "docker pull nginx:alpine-slim"
      sh "docker pull node:lts-slim"
    }
    stage('Build homepage') {
      sh "docker build . -t $ROOT_IMAGE"
    }
    stage('Manage tags & remove untagged') {
      sh "docker tag $ROOT_IMAGE $ROOT_IMAGE:build-$BUILD_ID"
      sh 'docker image prune -f'
      sh "docker push $ROOT_IMAGE"
      sh "docker push $ROOT_IMAGE:build-$BUILD_ID"
    }    
  }
  withCredentials([string(credentialsId: 'webhook-homepage', variable: 'WEBHOOK')]) {
    sh '''
      curl -v -X POST $WEBHOOK
    '''
  }
}