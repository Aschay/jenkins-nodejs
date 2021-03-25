const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://localhost:9000',
       options : {
       'sonar.sources': '.',
       'sonar.login':'admin',
       'sonar.password':'chayma123',
       'sonar.projectKey': 'sonar-nodejs',
       'sonar.projectName': 'sonar-nodejs',
       'sonar.langauge': 'js',
       'sonar.profile': 'node',
       'sonar.sourceEncoding':'UTF-8',
      
       }
     }, () => {});