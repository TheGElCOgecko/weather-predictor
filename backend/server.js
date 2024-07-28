const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000; // Choose any port you prefer

app.use(express.json());
app.use(cors());

const msg = "Node.js"

app.get('/', (req, res) => {
    res.send(`Hello from ${msg} server!`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
