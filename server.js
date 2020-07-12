const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/fsdoblakoangular')));

console.log(__dirname);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname,`./src/index.html`));
});

app.listen(process.env.PORT || 8080, () => {
console.log('Listening enabled')
});
