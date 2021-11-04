const express = require('express');
const mongoose = require('mongoose');
// const { MONGO_URI } = require('./keys');
const app = express();
const PORT = 5000;
// 7rCZYSgUEKflGVI5

mongoose.connect("mongodb+srv://martin:7rCZYSgUEKflGVI5@cluster0.2cxyi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


require('./modules/user');

mongoose.connection.on('connected', () => {
    console.log('mongodb is connected successfuly');
});
mongoose.connection.on('error', () => {
    console.log('error connecting to mongodb', err);
});

app.get('/', (req, res) => {
    res.send('home page')
});

app.listen(PORT, () => {
    `server is listening on port ${PORT}`
});