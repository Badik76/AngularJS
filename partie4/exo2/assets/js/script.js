var app = angular.module('myApp',[]);
app.controller('VoitureCtrl1', function($scope, $http) {
  $http.get('voiture.json') .then(function(response) {
    $scope.voitures = response.data;
  });
});
