(function(){
	'use strict';
	angular.module('app.users')
	.controller('UsersController', ['$http', '$state', '$filter' , UsersController]);

	function UsersController($http, $state, $filter){
		var vm = this;
		vm.list = [];
		vm.add = add;
		vm.edit = edit;
		vm.selected = null;

		init();

		function init(){
			$http.get('assets/sampleData.json').success(function(data){
				vm.list = [].concat(data.users);
			});


			if ($state.params.id){
				vm.selected = {"id":1,"login":"ugsk\\IvanovAA", "name":"Иванов Александр Александрович", "created":"01.01.2015"};
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
