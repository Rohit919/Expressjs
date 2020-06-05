const express = require('express');
const app = express();


const port = 4444;
app.use(express.static('public'));
app.use('/static', express.static('public/css'));

app.get("/", (req, res) => {
    res.send("Welcome to express");
});

app.get("/html", (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
});

app.get("/users", (req, res) => {
    res.send("Welcome to user page");
});

app.get("/users/:id?", (req, res) => {
    if (req.params.id == undefined) {
        res.send("Welcome to user page ");
    } else {
        res.send("Welcome to user page with id : " + req.params.id);
    }

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})