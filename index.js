const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());

app.post('/users', userController.createNewUser);
app.get('/tasks', userController.getUserTasks);

app.listen(PORT, () => console.log(`Listening in the port ${PORT}`));
