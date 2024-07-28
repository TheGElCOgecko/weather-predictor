const express = require('express');
const app = express();
const port = 5000; // Choose any port you prefer

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Node.js server!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
