const express = require('express');
const path = require('path');
const app = express();

const ROOT = path.join(__dirname);

app.use(express.static(ROOT));

app.get('*', (req, res) => {
  const indexPath = path.join(ROOT, 'index.html');
  res.sendFile(indexPath, (err) => {
    if(err) {
      // Essaie dans public/
      res.sendFile(path.join(ROOT, 'public', 'index.html'));
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Défi Autos 42 sur le port ${PORT}`);
});
