'use strict';

(function(){
	angular.module('app.users')
	.controller('UsersController', ['$http', '$state', '$filter', 'User' , UsersController]);

	function UsersController($http, $state, $filter, User){
		var vm = this;

		vm.list = [];
		vm.selected = null;
		vm.add = add;
		vm.edit = edit;
		vm.save = save;

		$http.get('assets/sampleData.json').success(function(data){
			vm.list = data.users;
		});

		function add(){
			vm.selected = {
				domain:'ugsk',
				role:'1',
				filial:'1',
				saleChannel:'1',
				intermediate:'1',
				pos:'1'
			};
			$state.go('users.new');
		}

		function edit(user){
			vm.selected = user;
			$state.go('users.edit', {id : user.id});
		}

		function save(user){
			console.debug(user.name);
		}
	}
})();
