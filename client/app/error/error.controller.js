(function() {
    'use strict';

    function ErrorController() {

        var vm = this;

        vm.error = '404';

    }

    ErrorController.$inject = [];

    angular
    .module('app.error')
    .controller('ErrorController', ErrorController);

})();