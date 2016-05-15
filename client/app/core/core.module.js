(function() {
    'use strict';

    angular
      .module('app.core', [
        'ui.router',
        'app.home',
        'app.error',
        'angulartics',
        'angulartics.google.analytics'
      ]);
})();