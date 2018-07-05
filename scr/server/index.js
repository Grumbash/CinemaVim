const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.get('/api/getOSType', (req, res) =>{
  res.send({
    type: os.type()
  }
)});
app.listen(8080, () => console.log('Listening on port 8080!'));
