// var obj={
//   name: 'Ankur'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
// //String to JSON
// console.log('String to JSON');
// var personString = '{"name":"Ankur", "age":35}';
// var person = JSON.parse(personString);
// console.log(person);

const fs = require('fs');

var originalNotes={
  name:"Anks",
  age:35
};

var originalNotesStr = JSON.stringify(originalNotes);

fs.writeFile('notes.json', originalNotesStr, ()=>{
  console.log('JSON String written to note.js Let us read it now');
  var noteString = fs.readFileSync('notes.json');
  var note = JSON.parse(noteString);
  console.log('Content of File', note.name);
});
