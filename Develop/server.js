const http = require('http');
const fs = require('fs');
const path = require('path')
const db = require('./db/db.json')

const express = require('express')
const app =express();
const PORT = processs.env.PORT || 3000;


app.get("/notes", (req ,res)=>{
  res.send("NOTES")
});

app.get("/api/notes",(req, res)=>{
  res.send("API NOTES")
});

app.listen(PORT, ()=>{
  console.log(`App listening on PORT http://localhost:${PORT}`);
});

const newNote = {
  "title":"Test Title",
  "text":"Test text"
}

//Get the current Notes by reading them from 'db.json'
fs.readFile(path.join(__dirname + "/db/db.json"), "utf8", (err, data) => {

//Append a new notes to the collection of notes 
  const note = JSON.parse(data);
// Save the newly extended collection back to db.json
  const noteJSON = JSON.stringify(note);

});
