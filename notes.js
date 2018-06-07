const fs = require('fs');
const validator = require('validator');

var addNote = (title,body)=>{
  var result = '';
  console.log("Trying to add the following Note "+title+":"+body);
  var notes = fetchNotes();

  var newNote = {
    title,
    body
  };

  var duplicateNotes = [];

  try{
    duplicateNotes = notes.filter((note) => note.title === title);
  }catch(e){
    //console.log("We got an Error", e);
  }

  if(duplicateNotes.length === 0){
    notes.push(newNote);
    saveNotes(notes);
    result = newNote;
  }else{
    //console.log('Found a duplicate Note');
  }
    return result;
};

var getAll = ()=>{
  console.log('Get All Notes');
};

var getNote = (title)=>{
  var notesArray = fetchNotes();
  var filteredNotesArray = notesArray.filter((note) => title === note.title);
  return filteredNotesArray[0];
};

var removeNote = (title)=>{
  var notesArray = fetchNotes();
  var filteredNotesArray = notesArray.filter((note) => note.title !== title);
  saveNotes(filteredNotesArray);
  return notesArray.length !== filteredNotesArray.length;
};

/*
  A set of reusable functions
*/
var fetchNotes = () => {
    var notesString = '';
    try{
      notesString = fs.readFileSync('notes-data.json');
    }catch(e){}

    var res = [];
    if(notesString !== ''){
      try{
        res = JSON.parse(notesString);
      }catch(e){
        console.log("File seems to be empty");
      }
    }

    return res;
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

module.exports={
  addNote,
  getAll,
  getNote,
  removeNote
};
