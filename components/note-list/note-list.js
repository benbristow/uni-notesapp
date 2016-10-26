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

notesApp.controller('noteListController', function($scope) {
  $scope.createNote = function() {
    $scope.notes.push({
      title: "New Note",
      content: "Congrats, you've made a new note!"
    });
    $scope.selectLastNote();
  };

  $scope.deleteNote = function(note) {
    $scope.notes.splice($scope.notes.indexOf(note));
    if($scope.notes.length === 0) {
      $scope.createNote();
    } else {
      $scope.selectLastNote();
    }
  };

  $scope.selectNote = function(note) {
    $scope.selectedNote = note;
  };

  $scope.selectLastNote = function() {
    $scope.selectNote($scope.notes[$scope.notes.length -1]);
  };
});
