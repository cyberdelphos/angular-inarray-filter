'use strict';
// Declare app level module which depends on filters, and services
angular.module('InArrayFilterDemoApp', [
        'InArray.controllers',
        'filters-inArrayFilter',
        'ngRoute'                           // Angular Routes
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'MainCtrl'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);