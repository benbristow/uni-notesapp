notesApp.directive('noteEditor', function() {
  return {
    restrict: 'E',
    templateUrl: '/components/note-editor/note-editor.html',
    controller: 'noteEditorController',
    scope: {
      note: '='
    }
  };
});

notesApp.controller('noteEditorController', function() {
});
