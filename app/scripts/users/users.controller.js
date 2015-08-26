'use strict';

(function(){
	angular.module('app.users')
	.controller('UsersController', ['$http', '$state' UsersController]);

	function UsersController($http, $state){
		var vm = this;
		$http.get('assets/sampleData.json').success(function(data){
			vm.list=data.users;
		});
		

		this.showDetails = showDetails;

		function showDetails(userId){
			$state.go('user.detail', {id: userId});
		}
	}
})();