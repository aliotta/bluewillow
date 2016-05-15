(function() {
    'use strict';

    function ShellController($state) {
        var vm = this;
    }

    ShellController.$inject = ['$state'];

    angular
    .module('app')
    .controller('ShellController', ShellController);

})();