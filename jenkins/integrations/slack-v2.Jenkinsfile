@Library('jenkins-shared-lib')_
node {
  Random rand = new Random() 
  def random_num = rand.nextInt(4) //0,1,2,3
  println("random number"+random_num)
  try {
    stage('build') {
      println('so far so good...')
      
    }
    stage('test') {
      if( random_num==1){
      println('A test has failed!')
      currentBuild.result = "FAILURE";
      sh 'exit 1'
    }
    else if( random_num==0) { 
      println('A test has been a succes!')
      currentBuild.result = "SUCCESS";
      sh 'exit 0'
    }
    else if(random_num==2) {
      println('A serious problem occured !')
      currentBuild.result = "UNSTABLE";
      sh 'exit 2'
    }
    else {
      println('A test results cannot be determined !')
      currentBuild.result = "UNCLEAR";
      sh 'exit 127'
    }
    }
  }
    catch(e) {
    slackNotif(currentBuild.currentResult)
    throw e;
  }
  finally {
        if (currentBuild.currentResult=='SUCCESS'){
          slackNotif(currentBuild.currentResult)
          }
        echo 'This will always run'
    }

}
