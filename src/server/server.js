const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../../dist`));

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('Listening on port 3000...');
});
