//const express = require('express');
//const app = express();

//app.get('/', (req, res) => {
//    res.status(200).send('Hello, World!');
//});

//module.exports = app; // Ensure this is present

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello, World!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
