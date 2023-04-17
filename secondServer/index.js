const express = require('express');
const {connect} = require('./src/utils/database');

const PORT = 4000
const app= express();

connect();

app.listen(PORT, () => console.log(`listening on: http//localhost:${PORT}`));

