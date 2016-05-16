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
                    templateUrl: 'app/layout/col_three.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                },
                'middle@site.home': {
                    templateUrl: 'app/home/home.html'
                },
                'left@site.home': {
                    templateUrl: 'app/home/home_left.html'
                },
                'right@site.home': {
                    templateUrl: 'app/home/home_right.html'
                }
            }
        });
    }]);
})();