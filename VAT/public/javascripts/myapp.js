// Declare app level module which depends on filters, services
angular.module('myApp', [] ).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: '',
		controller: 
	}).otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);
}]);