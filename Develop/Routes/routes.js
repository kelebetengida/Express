const fs = require("fs");
const path=require("path");


const updateDb=(notes)=>{
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(notes))
}

const readNotes=()=>{
    const notes= fs.readFileSync(path.join(__dirname, "../db/db.json"))
    return JSON.parse(notes)
}
module.exports=app=> {
  //  fs.readFile("db/db.json","utf8",(err,data)=>{
        
     //   const notes =JSON.parse(data);

        app.get("/api/notes", (req,res)=>{
            const notes=readNotes();
            res.json(notes);
        });

        app.post("/api/notes", (req,res)=>{
            const notes=readNotes();
            let note=req.body;
            notes.push(note);
            updateDb(notes);
            res.sendStatus(200)
        });

        app.get("/api/notes/:id", (req,res)=>{
            const notes=readNotes();
            res.json(notes[req.params.id]);
        });

        app.delete("/api/notes/:id", (req,res)=>{
            const notes=notes.splice(req.params.id,1);
            console.log(notes);
            updateDb(notes.id);
        });
        
        app.get("/notes", (req,res)=>{
            res.sendFile(path.join(__dirname,"../public/notes.html"));
        });

        app.get("*", (req,res)=>{
            res.sendFile(path.join(__dirname,"../public/index.html"));
        });


        
  //  })
}