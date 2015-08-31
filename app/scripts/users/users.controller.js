(function(){
	'use strict';
	angular.module('app.users')
	.controller('UsersController', ['Users','$state', '$stateParams', '$filter' , UsersController]);

	function UsersController(Users, $state, $stateParams, $filter){
		var vm = this;
		vm.list = [];
		vm.add = add;
		vm.edit = edit;
		vm.selected = null;
		
		init();

		function init(){
			if ($stateParams.id){
				Users.one($stateParams.id).get().then(function(data){
					vm.selected = data;	
				});
			} else {
				Users
				.getList()
				.then(function(data){
					vm.list = [].concat(data);
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
