'use strict';

(function(){
	angular.module('app.users')
	.controller('UsersController', ['$http', '$state', '$filter' , UsersController]);

	function UsersController($http, $state, $filter){
		var vm = this;

		$http.get('assets/sampleData.json').success(function(data){
			vm.list=data.users;
		});

		vm.edit = edit;
		vm.save = save;

		function edit(user){
			$state.go('users.edit', {id : user.id});
			vm.user = user;
		}

		function save(user){
			console.debug(user.name);
		}
	}
})();
