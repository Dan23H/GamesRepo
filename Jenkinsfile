pipeline {
  agent any

  environment {
    BACKEND_IMAGE = 'demo-backend'
    FRONTEND_IMAGE = 'demo-frontend'
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/Dan23H/GamesRepo.git'
      }
    }

    stage('Install & Test Backend') {
      steps {
        dir('backend') {
          sh 'npm install'
          sh 'npm run test || true'
        }
      }
    }

    stage('Install & Test Frontend') {
      steps {
        dir('frontend') {
          sh 'npm install'
          sh 'npm run lint || true'
        }
      }
    }

    stage('Build Docker Images') {
      steps {
        sh 'docker build -t $BACKEND_IMAGE ./backend'
        sh 'docker build -t $FRONTEND_IMAGE ./frontend'
      }
    }

    stage('Run Containers') {
      steps {
        sh '''
        docker stop demo-backend || true && docker rm demo-backend || true
        docker stop demo-frontend || true && docker rm demo-frontend || true

        docker run -d --name demo-backend -p 4000:3000 $BACKEND_IMAGE
        docker run -d --name demo-frontend -p 3000:3000 $FRONTEND_IMAGE
        '''
      }
    }
  }
}
