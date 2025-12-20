
import express from "express";

// Setup
const app = express();
const PORT = 3000;

// Data
let count=0;

// Routes
app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/increment", function(req, res) {
    res.send(count.toString())
    count++
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

})
