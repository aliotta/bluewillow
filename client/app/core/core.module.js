(function() {
    'use strict';

    angular
      .module('app.core', [
        'ui.router',
        'app.home',
        'app.error',
        'app.services',
        'app.about',
        'angulartics',
        'angulartics.google.analytics'
      ]);
})();