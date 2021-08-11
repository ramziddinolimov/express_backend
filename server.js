const express = require("express");


const app = express()


app.listen(8088, () => {
    console.log("App running at 8088");
})

app.get("/", (req, res) => {
    res.send("Test");
});