# client
sudo apt-get install ruby-dev
sudo gem install compass
npm install -g grunt
npm install -g yo
npm install -g generator-angular


yo angular

bower install --save restangular

#Adding crud capabilities
yo angular:route movie-add --uri=create/movie
yo angular:route movie-view --uri=movie/:id
yo angular:route movie-delete --uri=movie/:id/delete
yo angular:route movie-edit --uri=/movie/:id/edit

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
