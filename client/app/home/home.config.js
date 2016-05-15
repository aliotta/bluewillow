(function() {
    'use strict';

    angular
    .module('app.home', ['app.core'])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
        .state('site.home', {
            url: '/',
            views: {
                '@site': {
                    templateUrl: 'app/layout/shell.html',
                    controller: 'ShellController',
                    controllerAs: 'vm'
                },
                'main@site.home': {
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                }
            }
        });
    }]);
})();