
const express = require('express');

const app = express();
const port = 3000 || process.env.PORT;


app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/publc/index");
});

app.listen(port, function () {
    console.log("server is running on port:" + port);
});