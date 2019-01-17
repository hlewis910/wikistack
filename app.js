const morgan = require('morgan');
const express = require('express');
const bodyParsing = require('express.urlencoded');

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send('Hello World');
})

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});