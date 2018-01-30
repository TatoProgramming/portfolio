/**
 * Created by Taylor on 1/29/2018.
 * just in-case I want start using node
 */
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
app.use("/", serveStatic(path.join(__dirname + '/docs')));

// app.get('*', function (req, res) {
//   res.sendFile(__dirname + '/dist/index.html');
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log('listening on port: ' + port);
