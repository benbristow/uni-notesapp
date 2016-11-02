notesApp.directive('noteEditor', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/note-editor/note-editor.html',
    controller: 'noteEditorController',
    scope: {
      note: '='
    }
  };
});

notesApp.controller('noteEditorController', function($scope) {
  $scope.tinymceOptions = {
    plugins : 'advlist autolink charmap fullscreen link image media lists paste print preview wordcount',
    skin: 'lightgray',
    theme : 'modern'
  };

  $scope.editTitle = function() {
    var inputTitle = prompt("What are you calling this note?", $scope.note.title);
    $scope.note.title = inputTitle ? inputTitle : "Unnamed Note";
  };
});
