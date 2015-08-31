(function(){
	'use strict';
	angular.module('app.users')
	.factory('Users', ['Restangular', Users]);

	function Users(Restangular){
		return Restangular.service('Employees');
	}
})();
