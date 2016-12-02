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

notesApp.controller('noteListController', function($scope, $geolocation, notesFactory) {
  $scope.createNote = function() {
    notesFactory.saveNotes($scope.notes);
    $scope.notes = notesFactory.getNotes();
    $geolocation.getCurrentPosition().then(function(position) {
      notesFactory.addNote(position);
      $scope.notes = notesFactory.getNotes();
      $scope.selectLastNote();
    });
  };

  $scope.deleteNote = function(note) {
    notesFactory.saveNotes($scope.notes);
    notesFactory.deleteNote($scope.notes.indexOf(note));
    $scope.notes = notesFactory.getNotes();
    $scope.selectLastNote();
  };

  $scope.selectNote = function(note) {
    $scope.selectedNote = note;
  };

  $scope.selectLastNote = function() {
    $scope.selectNote($scope.notes[$scope.notes.length -1]);
  };
});
