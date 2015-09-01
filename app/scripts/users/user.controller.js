//user.controller.js

(function(){
	'use strict';
	angular.module('app.users')
	.controller('UserController',['$state', '$stateParams', 'Users', UserControler]);

	function UserControler($state, $stateParams, Users)
	{
		var vm = this;
		vm.selected = {
			domain:'ugsk',
			role:'1',
			filial:'1',
			saleChannel:'1',
			intermediate:'1',
			pos:'1'
		};

		init();

		function init(){
			if ($stateParams.id)
			{
				Users.one($stateParams.id).get().then(function(data){
					vm.selected = data[0];
				});
			}
		}

		function save(){

		}
	}

})();
