//user.controller.js

(function(){
	'use strict';
	angular.module('app.users')
	.controller('UserController',['$http', '$state', 'User', UserControler]);

	function UserControler($state, User)
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
			if ($state.params.id)
			{
				vm.selected = {"id":1,"login":"ugsk\\IvanovAA", "name":"Иванов Александр Александрович", "created":"01.01.2015"};
			}
		}

		function save(){

		}
	}

})();
