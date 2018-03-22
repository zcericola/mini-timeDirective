angular.module('app').directive('showTime',function(){
return {
    templateUrl: './js/time.html',
    scope: {
        parentTime: '@'

    }
};
})