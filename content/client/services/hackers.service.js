/* global angular */
/* https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#data-services */
; (function () {
    'use strict'

    angular.module('client.services')
        .factory('hackersService', HackersServiceFactory)

        HackersServiceFactory.$inject = ['$http', '$q']

    function HackersServiceFactory($http, $q) {
        return {
            read: read,
            readById: readById,
            create: create,
            update: update,
            delete: _delete
        }
        function read() {
            return $http.get('/api/hackers')
                .then(xhrSuccess)
                .catch(onError)
        }
        function readById(id) {
            return $http.get(`/api/hackers/${id}`)
                .then(xhrSuccess)
                .catch(onError)
        }
        function create(hackerData) {
            return $http.post('/api/hackers', hackerData)
                .then(xhrSuccess)
                .catch(onError)
        }
        function update(hackerData) {
            return $http.put(`/api/hackers/${hackerData._id}`, hackerData)
                .then(xhrSuccess)
                .catch(onError)
        }
        function _delete(id) {
            return $http.delete(`/api/hackers/${id}`)
                .then(xhrSuccess)
                .catch(onError)
        }
        function xhrSuccess(response) {
            return response.data
        }
        function onError(error) {
            console.log(error.data)
            return $q.reject(error.data)
        }
    }
})();