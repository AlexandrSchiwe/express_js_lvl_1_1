const express = require('express');
const app = express();
const Port = 9000;

// 1.Server aufsetzen

app.set('view engine', 'ejs'); // ejs als template engine 

// middleware

app.use((req, _, next) => {
    console.log("Anfrage:", req.method, req.url);
    next();
})

// 2.Static file server

app.use(express.static("assets"));

// 3. Index zum test

app.get('/', (req, res) => {
    res.render('index.ejs',);
})

// Server listening

app.listen(Port, () => console.log("Server listening on port" + Port));