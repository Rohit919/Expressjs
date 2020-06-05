const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './public');


const port = 4444;
app.use(express.static('public'));
app.use('/static', express.static('public/css'));

app.get("/", (req, res) => {
    res.send("Welcome to express");
});

app.get("/index", (req, res) => {
    res.render('index', {title :'This is title', content : 'this is content of the of the page'})
});

app.get("/html", (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
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

app.get('/flight/:from?.:to?', (req, res) => {
    if (req.params.from == undefined) {
        res.send("Welcome to flight ");
    } else {
        res.send(`Welcome to user you are travel from ${req.params.from} to ${req.params.to}`);
    }
});

var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

var cb2 = function (req, res) {
    res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2]);

app.get('/example/a', function (req, res) {
    res.send('Hello from A!')
});

app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req, res) {
    res.send('Hello from B!')
});

var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req, res) {
    res.send('Hello from D!')
});

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})