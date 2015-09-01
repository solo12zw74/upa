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

		vm.roles=[{id:"1", name:"Сотрудник"}, {id:"2", name:"Партнёр"}, {id:"3", name:"Куратор"}, {id:"4", name:"Куратор ГО"}, {id:"5", name:"Андеррайтер"}];
		vm.filials = [ {id:"1", name: "Архангельский филиал"}, {id:"2", name: "Барнаульский филиал"},{id:"3", name: "Горноалтайский филиал"}];
		vm.saleChannels = [ { id: "1", name: "Офисно-прямой"}, { id: "2", name:  "Агентский"}, { id: "3", name:  "Партнёрский"} ];
		vm.intermediates = [{ id: "0", name: "Не выбран"},{ id: "1", name: "Иванов Александр Александрович"},{ id: "2", name: "Петров Пётр Петрович"}];
		vm.poses = [ { id: "0", name:"Не выбран"}, { id: "1", name:"Сотрудник"}, { id: "2", name:"Куратор"}, { id: "3", name:"Андеррайтер"} ];

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
