'use strict';

/**
 * @ngdoc overview
 * @name generatedApp
 * @description
 * # generatedApp
 *
 * Main module of the application.
 */
 angular
 .module('app', [
  'ngCookies',
  'restangular',
  'ui.router',
  'ngMockE2E',
  'app.users',
  'appDev'
  ])
 .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

  }])
 .config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url:'/',
    templateUrl: 'main.html',
  })
  .state('users', {
    url:'/users',
    templateUrl: 'scripts/users/users.html',
    controller: 'UsersController',
    controllerAs: 'users'
  })
  .state('users.edit', {
    url:'/{id:[0-9]{1,8}}',
    templateUrl: 'scripts/users/users.edit.html',
    controller: 'UserController',
    controllerAs: 'user'
  })
  .state('users.new', {
    url:'/new',
    templateUrl: 'scripts/users/users.edit.html',
    controller: 'UserController',
    controllerAs: 'user'
  })
  .state('mediators', {
    url:'/mediators',
    templateUrl: 'scripts/users/mediators.html',
    controller: 'MediatorsController',
    controllerAs: 'mediators'
  })
  .state('poses', {
    url: '/poses',
    templateUrl: 'scripts/users/pointOfSales.html',
    controller: 'PointOfSalesController',
    controllerAs: 'poses'
  });


}]);
