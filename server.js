const express = require('express');
const os = require('os')
const app = express();
const port = 8000;

app.get('/', function (req, res) {
  res.send(`This is the Frontend running on ${os.hostname()}`);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});