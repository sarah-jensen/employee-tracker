const express = require('express');
const inquirer = require('inquirer');

const app = express();
const routes = require('./routes');
const PORT = 3001;

app.use(routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

