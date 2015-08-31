(function(){
	'use strict';

	angular.module('appDev', [])
	.run(function($httpBackend, $http){
		var data = {
			"users":[
			{"id":1,"login":"ugsk\\IvanovAA", "name":"Иванов Александр Александрович", "created":"01.01.2015"},
			{"id":2,"login":"ugsk\\kip", "name":"Кузнецов Илья Петрович"},
			{"id":3,"login":"ugsk\\RemeovIS", "name":"Ремезов Иван Савельевич"},
			{"id":4,"login":"ugsk\\IvanovAA", "name":"Иванов Александр Александрович"},
			{"id":5,"login":"ugsk\\kip", "name":"Кузнецов Илья Петрович"},
			{"id":6,"login":"ugsk\\RemeovIS", "name":"Ремезов Иван Савельевич"},
			{"id":7,"login":"ugsk\\IvanovAA", "name":"Иванов Александр Александрович"},
			{"id":8,"login":"ugsk\\kip", "name":"Кузнецов Илья Петрович"},
			{"id":9,"login":"ugsk\\RemeovIS", "name":"Ремезов Иван Савельевич"},
			{"id":10,"login":"ugsk\\IvanovAA", "name":"Иванов Александр Александрович"},
			{"id":11,"login":"ugsk\\kip", "name":"Кузнецов Илья Петрович"},
			{"id":12,"login":"ugsk\\RemeovIS", "name":"Ремезов Иван Савельевич"},
			{"id":13,"login":"ugsk\\IvanovAA", "name":"Иванов Александр Александрович"},
			{"id":14,"login":"ugsk\\kip", "name":"Кузнецов Илья Петрович"},
			{"id":15,"login":"ugsk\\RemeovIS", "name":"Ремезов Иван Савельевич"},
			{"id":16,"login":"ugsk\\IvanovAA", "name":"Иванов Александр Александрович"},
			{"id":17,"login":"ugsk\\kip", "name":"Кузнецов Илья Петрович"},
			{"id":18,"login":"ugsk\\RemeovIS", "name":"Ремезов Иван Савельевич"},
			{"id":19,"login":"ugsk\\IvanovAA", "name":"Иванов Александр Александрович"},
			{"id":20,"login":"ugsk\\kip", "name":"Кузнецов Илья Петрович"},
			{"id":21,"login":"ugsk\\RemeovIS", "name":"Ремезов Иван Савельевич"},
			{"id":22,"login":"ugsk\\IvanovAA", "name":"Иванов Александр Александрович"},
			{"id":23,"login":"ugsk\\kip", "name":"Кузнецов Илья Петрович"},
			{"id":24,"login":"ugsk\\RemeovIS", "name":"Ремезов Иван Савельевич"}],
			"mediators":[],
			"poses":[]
		};

		$httpBackend.whenGET('/Employees').respond(data.users);
		$httpBackend.whenGET(new RegExp('\\/Employees\\/[0-9]+')).respond(
			function(method, url){
				var regexp = new RegExp('\\/Employees\\/([0-9]+)');
				var mockId = url.match(regexp)[1];
				return [200, data.users.filter(function(f){return f.id == mockId;})];
			});
		
		$httpBackend.whenGET(/\.html$/).passThrough();
		$httpBackend.whenGET(/\.json$/).passThrough();
	})
})();