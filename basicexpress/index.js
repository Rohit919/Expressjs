const express = require('express');
const app = express();


const port = 4444;

app.get("/", (req, res) => {
    res.send("Welcome to express");
});

app.get("/users", (req, res) => {
    res.send("Welcome to user page");
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
})
