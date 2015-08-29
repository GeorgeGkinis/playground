## Install postman to test REST API's##

## Install node v0.12##
# Note the new setup script name for Node.js v0.12
  curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
  
  # Then install with:
  sudo apt-get install -y nodejs
  
## install npm packages
# base app folder
npm install -g bower
npm install -g grunt-cli
npm install -g yo
npm install -g generator-angular

# client
sudo apt-get install ruby-dev
sudo gem install compass



#inside client folder
- yo angular
- yo angular:route movies

# server
npm install -g body-parser
npm install -g express
npm install -g lodash
npm install -g method-override
npm install -g mongoose
npm install -g node-restful


