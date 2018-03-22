angular.module('app').controller('mainCtrl', function($scope, $interval){
    $scope.name = 'Zac';
    $scope.time = new Date().toString();
    $scope.startTime = function(){
        $interval( () => {
            $scope.time = new Date().toString();
        })
    }
})