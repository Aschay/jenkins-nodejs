@Library('jenkins-shared-lib')_
node {
  Random rand = new Random() 
  def random_num = rand.nextInt(3)
  println("random number"+random_num)

    stage('build') {
      println('so far so good...')
     
    }
    stage('test') {
      if( random_num==0){
      println('A test has failed!')
      sh 'exit 1'
    }
    else { 
      println('A test has been a succes!')
      sh 'exit 0'
    }
    }
  
}
