const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3050;

app.use(express.static(path.join(__dirname, './build')));
app.use(cors({ origin: /^https?:\/\/cswcl.github.io/ }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(port, () => console.log(`APP listening at http://localhost:${port}`));
