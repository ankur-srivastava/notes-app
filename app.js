var notes = require('./notes.js');

const l = require('lodash');
const yargs = require('yargs');

var argv = yargs.argv;
var input = argv._[0];

if(input === 'addition'){
  var newNote = notes.addNote(argv.title, argv.body);
  if(newNote){
      console.log('Note Created', newNote);
  }else {
      console.log('Duplicate Note');
  }
}else if(input === 'list'){
  notes.getAll();
}else if(input === 'find'){
  var res = notes.getNote(argv.title);
  if(res){
    console.log("Found note", res);  
  }else{
    console.log("Note not found");
  }

}else if(input === 'remove'){
  var res = notes.removeNote(argv.title);
  var message = res ? 'Note was removed' : 'Note not found';
  console.log(message);
}else{
  console.log('Relax !!');
}
