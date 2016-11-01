notesApp.factory('notesFactory', ['localStorageService', function(localStorageService) {
  var initializeNotes = function() {
    return [
      {
        title: "New Note",
        content: ""
      }
    ]
  };

  return {
    getNotes: function() {
      var notes = localStorageService.get('notes');
      if(notes === null) {
        notes = initializeNotes();
      }
      return notes;
    },

    addNote: function() {
      var notes = this.getNotes();
      notes.push({ title: "New Note", content: "" });
      localStorageService.set('notes', notes);
    },

    deleteNote: function(note) {
      var notes = this.getNotes();
      notes.splice(notes.indexOf(note));
      localStorageService.set('notes', notes);
      if(notes.length == 0) {
        this.addNote();
      }
    },

    saveNotes: function(notes) {
      localStorageService.set('notes', notes);
    }
  };
}]);
