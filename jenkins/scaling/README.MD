### Steps to create jenkins slave and connect it to master via ssh connection : 

### 1.create a pair of private/public key in jenkins 
ssh-keygen 
### 2.create a slave container 
````docker run --name slave -d  jenkins/ssh-agent:alpine  "your_public_key" ````
### 3.configure jenkins to add the node from UI 
https://www.jenkins.io/doc/book/using/using-agents/  
### 4.add jenkins slave to known_hosts to jenkins master
from jenkins master : ````ssh-keyscan -p ssh_port_slave_container  ip_container  >> /var/jenkins_home/.ssh/known_hosts ````
### 5. additional fix because of mismatch java version on master and agent :  
add java bin path  JavaPath : /opt/java/openjdk/bin/java 