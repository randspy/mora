'use strict';

var fs = require('fs');

angular.module('mora')
  .controller('MainCtrl', function ($scope) {


    $scope.chooseFile =
    function (name) {
        console.log(name);
        var chooser = document.querySelector(name);
        chooser.addEventListener("change", function(evt) {
            console.log(this.value);
            fs.readFile(this.value, 'utf8', function (err, data) {
                if (err)
                {
                    throw err;
                }
                $scope.$apply(function () {
                    $scope.text = data;
                });
            });
        }, false);

        chooser.click();
    };
  });
