//user.controller.js

(function(){
	'use strict';
	angular.module('app.users')
	.controller('UserController',['$state', '$stateParams', 'User', 'Role', 'Filial', 'SaleChannel', 'Intermediate', 'PointOfSale', UserController]);

	function UserController($state, $stateParams, User, Role, Filial, SaleChannel, Intermediate, PointOfSale)
	{
		var vm = this;
		vm.roles = [];
		vm.filials = [];
		vm.saleChannels = [];
		vm.intermediates = [];
		vm.poses = [];
		vm.filter = '';
		vm.add = add;
		vm.edit = edit;

		vm.selected = {}

		init();

		function init(){
			Role
			.getList()
			.then(function(data){
				vm.roles = [].concat(data);
			});
			Filial
			.getList()
			.then(function(data){
				vm.filials = [].concat(data);
			});
			SaleChannel
			.getList()
			.then(function(data){
				vm.saleChannels = [].concat(data);
			});
			Intermediate
			.getList()
			.then(function(data){
				vm.intermediates = [].concat(data);
			});

			PointOfSale
			.getList()
			.then(function(data){
				vm.poses = [].concat(data);
			});

			User
			.getList()
			.then(function(data){
				vm.list = [].concat(data);
			});

			if ($stateParams.id)
			{
				User.one($stateParams.id).get().then(function(data){
					vm.selected = data;
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
