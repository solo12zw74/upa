(function(){
	'use strict';
	angular.module('app.users')
	.controller('UsersController', ['Users','$state', '$filter' , UsersController]);

	function UsersController(Users, $state, $filter){
		var vm = this;
		vm.list = [];
		vm.add = add;
		vm.edit = edit;
		vm.selected = {};
		vm.filter = '';
		init();

		function init(){
			Users
			.getList()
			.then(function(data){
				vm.list = [].concat(data);
			});

			if ($state.params && $state.params.id){
				Users.one($state.params.id).get().then(function(data){
					vm.selected = data[0];
				});
			}
		}


		function add(){
			$state.go('users.new');
		}

		function edit(user){
			vm.selected = user;
			$state.go('users.edit', {id : user.id});
		}
	}
})();
