(function() {
    'use strict';

    angular
    .module('app.services', ['app.core'])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
        .state('site.services', {
            url: '/',
            views: {
                '@site': {
                    templateUrl: 'app/layout/shell.html',
                    controller: 'ShellController',
                    controllerAs: 'vm'
                },
                'main@site.services': {
                    templateUrl: 'app/layout/col_three.html',
                    controller: 'ServicesController',
                    controllerAs: 'vm'
                },
                'middle@site.services': {
                    templateUrl: 'app/services/services.html'
                },
                'left@site.services': {
                    templateUrl: 'app/services/services_left.html'
                },
                'right@site.services': {
                    templateUrl: 'app/services/services_right.html'
                }
            }
        });
    }]);
})();