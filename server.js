const express = require("express");
const fs = require("fs").promises;
const database = require("./modeles/database.js");


const app = express();
const db = new database();



app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res) => {
    let response = await fs.readFile(__dirname +  "/views/index.html", "utf-8");
        res.send(response);
});

app.listen(3035, () => {
    console.log("App running at 3035");
})

app.get('/form', async (req, res) =>{
    let data = await db.readFile();
    res.json({
        data: data,
    });
});

