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
  'ngResource',
  'ui.router' , 
  'app.users'
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


  $stateProvider
  .state('users', {
    url:'',
    templateUrl: 'scripts/users/users.html',
    controller: 'UsersController',
    controllerAs: 'users'
  })
  .state('users.edit', {
    url:'/:id',
    templateUrl: 'scripts/users/users.edit.html',
    
  })
  .state('mediators', {
    url:'mediators',
    templateUrl: 'users/mediators.html',
    controller: 'MediatorsController',
    controllerAs: 'mediators'
  })
  .state('poses', {
    url: 'poses',
    templateUrl: 'users/pointOfSales.html',
    controller: 'PointOfSalesController',
    controllerAs: 'poses'
  });

  
}]);
