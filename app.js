const express = require("express")
const path = require("path");
const app = express()
app.listen(3000)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index/index.html"));
})

app.get("/css/css.css", (req, res) => {
    res.sendFile(path.join(__dirname, "css/css.css"));
})




