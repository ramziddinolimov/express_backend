const express = require("express");


const app = express()


app.listen(8080, () => {
    console.log("App running at 8080");
})

process.on("exit",  (event) => {
    console.log(event);
})