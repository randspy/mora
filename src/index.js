'use strict';

angular.module('mora',
  ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/main/main.html',
        controller: 'MainCtrl'
      });
  })
;
