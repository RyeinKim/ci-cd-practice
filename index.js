// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Universe!'); // 메시지 변경
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
