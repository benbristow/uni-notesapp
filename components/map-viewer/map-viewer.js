notesApp.directive('mapViewer', function() {
  return {
    restrict: 'A',
    controller: 'mapViewerController',
    scope: {
      notes: '=',
      selectedNote: '='
    },
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        scope.openModal();
      });
    }
  };
});

notesApp.controller('mapViewerController', function($scope, $uibModal) {
  $scope.map = {
    center: {
      latitude: 54.4688455,
      longitude: -3.7026863
    },
    zoom: 5
  };

  $scope.selectNote = function(note) {
    $scope.selectedNote = note;
    $scope.modalInstance.close();
  }

  $scope.openModal = function() {
    $scope.modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title-bottom',
      ariaDescribedBy: 'modal-body-bottom',
      templateUrl: 'components/map-viewer/map-viewer.html',
      size: 'lg',
      scope: $scope
    });
  };
});
