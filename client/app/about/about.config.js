(function() {
    'use strict';

    angular
    .module('app.about', ['app.core'])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
        .state('site.about', {
            url: '/',
            views: {
                '@site': {
                    templateUrl: 'app/layout/shell.html',
                    controller: 'ShellController',
                    controllerAs: 'vm'
                },
                'main@site.about': {
                    templateUrl: 'app/layout/col_three.html',
                    controller: 'AboutController',
                    controllerAs: 'vm'
                },
                'middle@site.about': {
                    templateUrl: 'app/about/about.html'
                },
                'left@site.about': {
                    templateUrl: 'app/about/about_left.html'
                },
                'right@site.about': {
                    templateUrl: 'app/about/about_right.html'
                }
            }
        });
    }]);
})();