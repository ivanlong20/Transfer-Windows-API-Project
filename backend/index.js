import express from "express";
import axios from "axios";
import fs from "fs";

const app = express();
const port = 80;

app.use(express.urlencoded({ extended: true }));

app.get("/players", async (req, res) => {});

app.get("/premier-league", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://transfermarkt-db.p.rapidapi.com/v1/transfers/list",
    params: {
      locale: "UK",
      competition_id: "GB1",
      top_transfers_first: "false",
    },
    headers: {
      "X-RapidAPI-Key": "33d0bc40edmsha14161fb8137d01p18b9d0jsn9c68138c30f6",
      "X-RapidAPI-Host": "transfermarkt-db.p.rapidapi.com",
    },
  };
  if (fs.existsSync("premier-league.json")) {
    const data = fs.readFileSync("premier-league.json");
    res.json(JSON.parse(data));
  } else {
    try {
      const response = await axios.request(options);
      res.json(response.data);
      console.log(response.data);
      fs.writeFileSync("premier-league.json", JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  }
});

app.get("/bundesliga", async (req, res) => {});

app.get("/la-liga", async (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
