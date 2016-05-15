(function() {
    'use strict';

    angular
    .module('app.error', ['app.core'])

    .config(['$stateProvider', function($stateProvider) {

        $stateProvider
        .state('site.error', {
            url: '/error',
            // data: {
            //     roles: [0,1,2,3,4,5,6,7]
            // },
            views: {
                '@site': {
                    templateUrl: 'app/layout/shell.html',
                    controller: 'ShellController',
                    controllerAs: 'vm'
                },
                'main@site.error': {
                    templateUrl: 'app/error/error.shell.html',
                    controller: 'ErrorController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('site.error.404', {
            url: '/404',
            templateUrl: 'app/error/error.404.html'
        });
    }]);
})();