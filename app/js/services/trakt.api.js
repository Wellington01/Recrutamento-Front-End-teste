(function () {

    angular
        .module('myApp.services', [])
        .factory('TraktAPI', TraktAPI);

    TraktAPI.$inject = ['$http'];

    function TraktAPI($http) {

        var apiUrl = "https://api.trakt.tv";
        var clientId = "0ae51ce15e2b29c1c353ef5ac5885e076af5f30ae49e1ffef931917d63c836df";
        var clientSecret = "61a5ed144cfea9ba9feef03dcd0bfa7d1ce66fc7b6ccc9009d47f6a39e3b82f2";
        var token = "";

        var config = {
            headers: {
                'trakt-api-key': clientId,
                'trakt-api-version': 2,
                'Content-type': 'application/json'
            }
        };

        return {
            getMorePopulateSeries: getMorePopulateSeries,
            getSerieDetail: getSerieDetail,
            getToken: getToken
        };

        function getToken() {

            var body = {
                'code': 'DA7335F4',
                'client_id': clientId,
                'client_secret': clientSecret,
                'redirect_uri': 'urn:ietf:wg:oauth:2.0:oob',
                'grant_type': 'authorization_code'
            };

            return $http.post(apiUrl + '/oauth/token', JSON.stringify(body), config);
        }

        function getMorePopulateSeries(pagination) {
            return $http.get(apiUrl + '/shows/popular?page=0&limit=' + pagination.limit + '&extended=full,images', config);
        }

        function getSerieDetail(id) {
            return $http.get(apiUrl + '/shows/' + id + '/?extended=full,images,ratings,episode', config);
        }
    }
})();