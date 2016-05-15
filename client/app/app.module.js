// Declare app level module which depends on views and components
(function () {
    'use strict';


    angular.module('app', ['app.core'])

    .config(['$urlRouterProvider', '$stateProvider', '$httpProvider',
        function($urlRouterProvider, $stateProvider, $httpProvider) {
      
            $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';

            $urlRouterProvider
                .when('',['$state', function($state) {
                    $state.go('site.home');
                }])
                .otherwise('/error/404');

            $stateProvider.state('site', {
                'abstract': true,
                resolve: {
                },
                template: '<div ui-view />'
            });
        }
    ])


})();