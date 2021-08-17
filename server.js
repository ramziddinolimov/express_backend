const express = require("express");
const fs = require("fs").promises;
const database = require("./modeles/database.js");


const app = express();
const db = new database();

app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())

app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res) => {
    let response = await fs.readFile(__dirname +  "/views/index.html", "utf-8");
        res.send(response);
});

app.listen(3060, () => {
    console.log("App running at 3060");
})

app.get('/form', async (req, res) =>{
    
    let data = await db.readFile();
    res.json({
        data: data,
    });
});

 app.post("/uform", async (req, res)=>{
   
    let dbbody = await db.addData(req.body.name, req.body.age, req.body.kurs, req.body.manba)
    res.json(dbbody)
 
})