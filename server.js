const express = require("express");
const fs = require("fs").promises


const app = express()




app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res) => {
    let response = await fs.readFile(__dirname +  "/views/index.html", "utf-8");
        res.send(response);
});

app.listen(3033, () => {
    console.log("App running at 3033");
})