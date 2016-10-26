notesApp.controller('mainController', function($scope) {
  $scope.notes = [
    {
      title: "test",
      content: "Welcome to your new note!"
    }
  ];
  $scope.selectedNote = $scope.notes[0];
});
