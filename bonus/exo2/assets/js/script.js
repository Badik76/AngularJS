angular.module('alertApp', [])
  .controller('alertCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.greeting = 'Tu as un ananas dans le babas!';
    $scope.doGreeting = function(greeting) {
      $window.alert(greeting);
    };
  }]);
