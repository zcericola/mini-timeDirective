angular.module('app').controller('mainCtrl', function($scope){
    $scope.name = 'Zac';
    $scope.time = new Date().toString();
})