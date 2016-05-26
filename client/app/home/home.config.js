(function() {
    'use strict';

    angular
    .module('app.home', ['app.core'])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
        .state('site.home', {
            url: '/home',
            views: {
                '@site': {
                    templateUrl: 'app/layout/home.shell.html',
                    controller: 'ShellController',
                    controllerAs: 'vm'
                },
                'main@site.home': {
                    templateUrl: 'app/layout/col_zero.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                },
                'middle@site.home': {
                    templateUrl: 'app/home/home.html'
                },
                'left@site.home': {
                    templateUrl: 'app/home/home_left.html'
                }
            }
        });
    }]);
})();