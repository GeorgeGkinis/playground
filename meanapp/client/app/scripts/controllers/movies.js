'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function ($scope,Movie) {
/*
    $scope.movies = [
      {title: "movie 1",url:"url"},
      {title: "movie 1",url:"url2"}
    ];
*/
     $scope.movieslist = Movie.getList().$object;
  });
