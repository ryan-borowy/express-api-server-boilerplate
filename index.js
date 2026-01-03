
import express from "express";
import path from "path";

// Setup
const app = express();
const PORT = 3000;

// Data
let count=0;
let serverName = "";

// Routes
app.get("/", (req, res) => {
    res.send(`Hello world ${serverName}`);
});

app.get("/get-name", (req, res) => {
    // Send an html form
    res.sendFile(path.resolve("./views/index.html"))
});

app.get("/decrement", function() {

})

app.get("/increment", function(req, res) {
    res.send(count.toString())
    count++
})

app.post("/set-name", function(req, res) {
    console.log("POST SET NAME was called")
    console.log(req)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

})
