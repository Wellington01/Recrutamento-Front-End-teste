(function () {
    'use strict';

    angular.module('myApp')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['$routeParams', 'TraktAPI', '$location'];

    function DetailController($routeParams, TraktAPI, $location) {

        var vm = this;
        //objects
        vm.serie = {};

        vm.id = $routeParams.id ? $routeParams.id : $location.path("/");

        vm.getSerieDetail = function () {

            TraktAPI.getSerieDetail(vm.id).then(function (response) {

                if (response.data) {

                    vm.serie = response.data;
                }

            }).catch(function (e) {
                console.log('Error: ' + e);
            });
        };
    }
})();