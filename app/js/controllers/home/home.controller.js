(function () {
    'use strict';

    angular.module('myApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['TraktAPI'];

    function HomeController(TraktAPI) {

        var vm = this;

        vm.pagination = {
            page: 0,
            limit: 9
        };

        //array
        vm.series = [];

        vm.getMorePopulateSeries = function (limit) {

            vm.pagination.limit += limit ? limit : 0;

            TraktAPI.getMorePopulateSeries(vm.pagination).then(function (response) {

                if (response.data.length > 0) {

                    vm.series = response.data;
                }

            }).catch(function (e) {
                console.log('Error: ' + e);
            });
        };
    }
})();