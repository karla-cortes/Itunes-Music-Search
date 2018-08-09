const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.static('./build'));

app.get('/search/:artist', (req, res) => {
  let artist = req.params.artist;
  axios.get(`https://itunes.apple.com/search?term=${artist}&limit=15`).then(response => {
    res.json(response.data)
  })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
