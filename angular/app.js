var app = angular.module("myApp",['ngStorage']);
app.controller('general',function($scope){

	$scope.tasksList = [];
	$scope.tasksListCookies = [];
	$scope.$storage = [];
	$scope.nowTime = '...';
	$scope.cookie = "No History";
	
	$scope.add = function (savedTask){
		var date = new Date();
		$scope.nowTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		$scope.tasksList.push({name: savedTask,time: $scope.nowTime});
		
		//yay cookies
		if (localStorage["tasksListCookies"]){
			$scope.whateverInCookies = JSON.parse(localStorage["tasksListCookies"]);
		 	$scope.whateverInCookies += $scope.whateverInCookies.concat($scope.tasksList);
		 	localStorage["tasksListCookies"] = JSON.stringify($scope.whateverInCookies);
		}
		else{
		 	localStorage["tasksListCookies"] = JSON.stringify($scope.tasksList);
		 }
		 $scope.cookie = JSON.parse(localStorage["tasksListCookies"]);
		
	}
	$scope.removeCookies = function(){
		localStorage["tasksListCookies"] = "";
		$scope.cookie = "No History";
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
