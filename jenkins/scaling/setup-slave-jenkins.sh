#!/bin/bash

## create public/private key pair with ssh-keygen 

docker run -d --name slave jenkins/ssh-agent:alpine "public_key_here"

# jenkins setup
cd ~ && cd .ssh && ssh-keygen -f jenkins
mkdir -p /var/jenkins_home/.ssh
#/home/docker/.ssh #/root/.ssh
cp /home/docker/.ssh/authorized_keys /var/jenkins_home/.ssh/authorized_keys
chmod 700 /var/jenkins_home/.ssh
chmod 600 /var/jenkins_home/.ssh/authorized_keys
sudo chown -R 1000:1000 /var/jenkins_home
docker run -d --name jenkins-slave -p 2222:22 -v /var/jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock  wardviaene/jenkins-slave
