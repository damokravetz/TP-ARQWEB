  
require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const listEndpoints = require('express-list-endpoints');

app.use(express.json());

require('./routes/publication.routes.js')(router);

app.use('/api', router);

router.get('/', (req, res) => {
  res.send(listEndpoints(app))
});

const port = 3000;
app.listen(port, () => console.log("it's alive!!!"));