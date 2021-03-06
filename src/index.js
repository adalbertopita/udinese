const express = require("express");
const axios = require("axios");
const cors = require("cors");

const { getUrlInfo } = require("./utils");

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const url = req.query.url;
  let info = {};

  try {

    let response = await axios.get(url);
    info = getUrlInfo(response.data);
    res.send(info);

  } catch(e) {

    res.status(500).send(e);
    
  }
})

app.listen(9100);