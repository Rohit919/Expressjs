const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Hello from express");
});
app.listen(7000);