(function() {
    'use strict';

    function NavigationController($state) {
        var vm = this;
   
        vm.current = $state.current.name;
    }

    NavigationController.$inject = ['$state'];

    angular
    .module('app')
    .controller('NavigationController', NavigationController);

})();