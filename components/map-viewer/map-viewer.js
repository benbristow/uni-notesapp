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
  $scope.center = {
    lat: 59.91,
    lng: 10.75,
    zoom: 12
  };

  $scope.openModal = function() {
    $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title-bottom',
      ariaDescribedBy: 'modal-body-bottom',
      templateUrl: 'components/map-viewer/map-viewer.html',
      size: 'lg',
      scope: $scope
    });
  };
});
