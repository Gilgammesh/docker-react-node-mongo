const express = require('express');
const { json } = require('express');
const cors = require('cors');
const db = require('./database/connection');
const user = require('./controllers/user.controller')

const app = express();

app.use(cors('*'));
app.use(json());

app.get('/users', user.getAll);
app.get('/users/:id', user.get);
app.post('/users', user.create);
app.put('/users/:id', user.update);
app.delete('/users/:id', user.delete);

db.connection();

const port = 4000;

app.listen(port, () => {
	console.log(`Servidor funcionando en http://localhost:${port}`);
});
