var app = angular.module("myApp",[]);
app.controller('general',function($scope, $timeout){

	$scope.tasksList = [];
	$scope.nowTime = '...'
	$scope.add = function (savedTask){
		var date = new Date();
		$scope.nowTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		$scope.tasksList.push({name: savedTask,time: $scope.nowTime});
	}

	$scope.remove = function ($index){
	 	$scope.tasksList.splice($index,1);
	} 
});


// 	1. live \ cache --V
// 	2. local storage \ cookie --?
// 	persistent storag:
// 	3. local file system
// 	4. online \ cloud \ server

// 1.button\remove
// 2.save in cookie
