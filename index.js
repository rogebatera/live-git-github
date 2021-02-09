const express = require('express');

const app = express();

app.get('/teste', (req, res) => {
    return res.json({hello: 'Word Teste Feature/Courses-page'})
});

app.get('/nova_rota', (req, res) => {
    return res.json({ hello: 'Realizando Novo Teste'})
});

app.get('/nova_rota3', (req, res) => {
    return res.json({ hello: 'Realizando Novo Teste'})
});

app.listen(3333);

