notesApp.directive('noteList', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/note-list/note-list.html',
    controller: 'noteListController',
    scope: {
      notes: '=',
      selectedNote: '='
    }
  };
});

notesApp.controller('noteListController', function($scope, notesFactory) {
  $scope.createNote = function() {
    notesFactory.addNote();
    $scope.notes = notesFactory.getNotes();
    $scope.selectLastNote();
  };

  $scope.deleteNote = function(note) {
    notesFactory.deleteNote(note);
    $scope.notes = notesFactory.getNotes();
  };

  $scope.selectNote = function(note) {
    $scope.selectedNote = note;
  };

  $scope.selectLastNote = function() {
    $scope.selectNote($scope.notes[$scope.notes.length -1]);
  };
});
