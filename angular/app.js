var app = angular.module("myApp",[]);
app.controller('general',function($scope, $timeout){

$scope.tasksList = [];
$scope.nowTime = '...'
$scope.add = function (savedTask){
var date = new Date();
$scope.nowTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

$scope.tasksList.push({name: savedTask,time: $scope.nowTime, logo: date});
}

});



