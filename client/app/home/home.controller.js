(function() {
    'use strict';

    function HomeController() {
        var vm = this;
        vm.selected = 'home';
    }

    HomeController.$inject = [];

    angular
    .module('app.home')
    .controller('HomeController', HomeController);

})();