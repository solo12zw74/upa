(function(){
	'use strict';
	angular.module('app.users')
	.factory('User', ['Restangular', User])
	.factory('Role', ['Restangular', Role])
	.factory('Filial', ['Restangular', Filial])
	.factory('SaleChannel', ['Restangular', SaleChannel])
	.factory('Intermediate', ['Restangular', Intermediate])
	.factory('PointOfSale', ['Restangular', PointOfSale]);



	function User(Restangular){
		return Restangular.service('/employee/');
	}

	function Role(Restangular){
		return Restangular.service('/role/');
	}

	function Filial(Restangular){
		return Restangular.service('/filial/');
	}
	function SaleChannel(Restangular){
		return Restangular.service('/saleChannel/');
	}
	function Intermediate(Restangular){
		return Restangular.service('/intermediate/');
	}

	function PointOfSale(Restangular){
		return Restangular.service('/pointOfSale/');
	}
})();
