'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('MyCtrl1', [function() {
	  console.log('fired controller 1');
  }])
  .controller('MyCtrl2', [function() {
	  console.log('fired controller 2');
  }])
  
    .controller('MyCtrl3', [function() {
	  console.log('fired controller 2');
  }]);