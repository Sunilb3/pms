pipeline {
    agent any
    
        stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Sunilb3/pms.git'
            }
        }

        stage('Build') {
            steps {
                bat "npm install"
            }
        }
        
        stage('Test') {
          steps {
           echo 'Running test cases'
            }
        }   
  
    }
}
