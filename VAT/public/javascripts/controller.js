function indexCtrl($scope, $http)
{
	$http.get('/').success(function(data, status, header, config){
		$scope.lesson = data.lesson;
	});
}