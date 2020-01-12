const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');



const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omni:omni@aircnc-hncqq.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

console.log('conectou banco');

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)

// re.params = Acessar route params (para edição e delete)

// req.body = Acessar corpo da requisição (para criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);
console.log('chamou as routes');

app.listen(3333);