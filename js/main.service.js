notesApp.factory('notesFactory', ['localStorageService', function(localStorageService) {
  var initializeNotes = function() {
    return [
      {
        title: "New Note",
        content: "test",
        coordinates: {
          latitude: 55.8591118,
          longitude: -4.2602975
        }
      }
    ];
  };

  return {
    getNotes: function() {
      var notes = localStorageService.get('notes');
      if(notes === null) {
        notes = initializeNotes();
        this.saveNotes(notes);
      }
      return notes;
    },

    addNote: function(position) {
      var notes = this.getNotes();
      notes.push({
        title: "New Note",
        content: "",
        coordinates: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      });
      this.saveNotes(notes);
    },

    deleteNote: function(noteIndex) {
      var notes = this.getNotes();
      notes.splice(noteIndex, 1 );
      if(notes.length == 0) {
        notes = initializeNotes();
      }
      this.saveNotes(notes);
    },

    saveNotes: function(notes) {
      localStorageService.set('notes', notes);
    }
  };
}]);
