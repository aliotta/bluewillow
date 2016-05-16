(function() {
    'use strict';

    function ShellController($state) {
        var vm = this;
        if($state.current.name === 'site.home') vm.selected = 'home';
        else if($state.current.name === 'site.about') vm.selected = 'about';
        else if($state.current.name === 'site.services') vm.selected = 'services';
        
    }

    ShellController.$inject = ['$state'];

    angular
    .module('app')
    .controller('ShellController', ShellController);

})();