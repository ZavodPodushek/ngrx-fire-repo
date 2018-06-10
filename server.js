const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));
app.get("*", (req, res) => res.sendFile(path.resolve(__dirname + '/dist')))

app.listen(port);
console.log('Listen ', port)