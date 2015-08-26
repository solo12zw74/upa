'use strict';

(function(){
	angular.module('app.users')
	.controller('UsersController', ['$http', '$state', UsersController]);

	function UsersController($http, $state){
		var vm = this;
		$http.get('assets/sampleData.json').success(function(data){
			vm.list=data.users;
		});
		

		vm.edit = edit;

		function edit(userId){
			$state.go('users.edit', {id: userId});
		}
	}
})();