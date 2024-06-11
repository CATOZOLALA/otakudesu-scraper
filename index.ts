const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes.js');
require('dotenv/config');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`App is listening on port ${port}, http://localhost:${port}`);
});

