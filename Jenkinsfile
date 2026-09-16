pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Frontend Install') {
      steps {
        script {
          if (isUnix()) {
            dir('client') {
              sh 'npm ci'
            }
          } else {
            dir('client') {
              bat 'npm ci'
            }
          }
        }
      }
    }

    stage('Frontend Tests') {
      steps {
        script {
          if (isUnix()) {
            dir('client') {
              sh 'npm test'
            }
          } else {
            dir('client') {
              bat 'npm test'
            }
          }
        }
      }
    }

    stage('Frontend Build') {
      steps {
        script {
          if (isUnix()) {
            dir('client') {
              sh 'npm run build'
            }
          } else {
            dir('client') {
              bat 'npm run build'
            }
          }
        }
      }
    }

    stage('Backend Install') {
      steps {
        script {
          if (isUnix()) {
            dir('server') {
              sh 'npm ci'
            }
          } else {
            dir('server') {
              bat 'npm ci'
            }
          }
        }
      }
    }

    stage('Backend Tests') {
      steps {
        script {
          if (isUnix()) {
            dir('server') {
              sh 'npm test'
            }
          } else {
            dir('server') {
              bat 'npm test'
            }
          }
        }
      }
    }
  }
}
