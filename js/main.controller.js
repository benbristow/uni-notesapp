notesApp.controller('mainController', function($scope, $window, notesFactory) {
  $scope.notes = notesFactory.getNotes();
  $scope.selectedNote = $scope.notes[0];

  $window.onbeforeunload = function() {
    notesFactory.saveNotes($scope.notes);
  };
});
