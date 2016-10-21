(function () {
    'use strict';

    angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngAnimate', 'myApp.services']);

    angular.module('myApp').config(function ($routeProvider, $mdThemingProvider, $httpProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('red');

        $routeProvider
            .when('/', {
                templateUrl: 'views/home/index.html',
                controllerAs: 'vm',
                controller: 'HomeController'
            })
            .when('/detail/:id', {
                templateUrl: 'views/detail/detail.html',
                controllerAs: 'vm',
                controller: 'DetailController'
            }).otherwise({
                redirectTo: '/'
            });
    });
})();