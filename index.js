const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send(`
        <html>
            <head>
                <title>Cool Hello World</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        margin-top: 50px;
                        background-color: #282c34;
                        color: #61dafb;
                    }
                    h1 {
                        font-size: 50px;
                        text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.5);
                    }
                </style>
            </head>
            <body>
                <h1> Hello, World! </h1>
                <p>Much love to you from <b>Prasad</b> </p>
            </body>
        </html>
    `);
});

const PORT = 3000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app; // Ensure this is present for testing or module imports
