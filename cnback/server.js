//site can be found here

const bodyParser = require("body-parser");
const axios = require("axios").default;
const express = require("express");
const cors = require('cors');
const corsConfig = {
    origin: '*',
    credentials:true,
    optionSuccessStatus:200
}

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsConfig))
app.enable('trust proxy'); // used so req.protocol returns https instead of http
const PORT = process.env.PORT || 8081;

//======= Routes =========

app.get('/words', async (req, res, next) => {
    let words = new Array(30).fill(0);
    const promises = words.map(() => axios.get('https://random-words-api.vercel.app/word/noun'))
    const responses = await Promise.allSettled(promises);
    const data = responses.map(response => response.value.data[0].word)
    console.log(data)
    res.send({data: data})
})

app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({Error: err.message})
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
