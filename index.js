const express = require('express');

const app = express();

app.get('/teste', (req, res) => {
    return res.json({hello: 'Word Teste Feature/Courses-page'})
});

app.listen(3333);

