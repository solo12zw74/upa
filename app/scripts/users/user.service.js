'use strict';

(function(){
	angular.module('app.users')
	.factory('User', ['$resource',User]);

	function User($resource){
		return $resource('http://localhost:51976/Employees');
	}
})();
