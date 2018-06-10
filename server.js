const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));
app.get("*", (req, res) => res.sendFile(path.join(__dirname + '/dist/index.html')))
/* 
TODO:
check for validity work 
with
     --- path.resolve
without  
     --- index.html  // write in conceptualy meaning about exist of index 
*/
app.listen(port);
console.log('Listen ', port)