import express from 'express';

// No typescript é necessário a biblioteca de definições de tipos ex: @types/biblioteca

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Diego',
        'Cleyton',
        'Robson',
        'Daniel'
    ])
});

app.listen(3333);