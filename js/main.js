var notesApp = angular.module('notes', ['ui.router', 'ui.tinymce', 'LocalStorageModule']);

notesApp.config(function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('notesApp');
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'mainController'
    });
});

notesApp.filter('html', function ($sce) {
  return function (text) {
    return $sce.trustAsHtml(text);
  };
});

notesApp.filter('htmlToPlaintext', function() {
  return function(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '').replace('&nbsp;', ' ') : '';
  };
});
