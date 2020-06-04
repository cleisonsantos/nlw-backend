import express from 'express';
import routes from './routes'
// No typescript é necessário a biblioteca de definições de tipos ex: @types/biblioteca

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);



/*
const users = [
    'Diego',
    'Cleyton',
    'Robson',
    'Daniel'
];


app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})

app.post('/users', (request, respose) => {

    const data = request.body;

    console.log(data);

    const user = {
        name: 'Cleison',
        email: 'css.cleison@outlook.com'
    };

    return respose.json(data);
});
*/
