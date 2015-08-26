//user controller
(function{
	angular.module('app.users')
	.controller('UserController', ['$state', UserController]);

	function UserController($state){
		var vm = this;


		$http.get('assets/sampleData.json').success(function(data){
			vm.user = data.users.find(function(element, index, array){
				element.Id = $state.params.id;
			});	
		});
	}
})();