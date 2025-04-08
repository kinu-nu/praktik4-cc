const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('✅ CI/CD berhasil! Ini versi terbaru dari app.');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
