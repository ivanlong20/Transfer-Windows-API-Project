import express from "express";
import axios from "axios";
import fs from "fs";
import cors from "cors";

const corsOptions = {
  origin: ["https://ivanlong20.github.io/", "http://localhost:3000"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"],
};

const app = express();
const port = 80;

app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.get("/players", async (req, res) => {});

app.get("/premier-league", async (req, res) => {
  let updateRequired = false;
  let updatedList = fs.readFileSync("update-list.json", "utf-8");
  updatedList = JSON.parse(updatedList);
  console.log(updateRequired);
  if (
    new Date() -
      new Date(
        updatedList.data.find(
          (league) => league.name === "premier-league"
        ).timestamp
      ).getTime() >
    86400000
  ) {
    updateRequired = true;
  }
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
  if (updateRequired) {
    try {
      const response = await axios.request(options);
      res.json(response.data);
      console.log(response.data);
      fs.writeFileSync("premier-league.json", JSON.stringify(response.data));
      updatedList.data.find(
        (league) => league.name === "premier-league"
      ).timestamp = new Date();
      console.log(updatedList);
      fs.writeFileSync("update-list.json", JSON.stringify(updatedList));
    } catch (error) {
      console.error(error);
    }
  } else {
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
  }
});

app.get("/bundesliga", async (req, res) => {
  let updateRequired = false;
  let updatedList = fs.readFileSync("update-list.json", "utf-8");
  updatedList = JSON.parse(updatedList);
  console.log(updateRequired);
  if (
    new Date() -
      new Date(
        updatedList.data.find(
          (league) => league.name === "bundesliga"
        ).timestamp
      ).getTime() >
    86400000
  ) {
    updateRequired = true;
  }
  const options = {
    method: "GET",
    url: "https://transfermarkt-db.p.rapidapi.com/v1/transfers/list",
    params: {
      locale: "UK",
      competition_id: "L1",
      top_transfers_first: "false",
    },
    headers: {
      "X-RapidAPI-Key": "33d0bc40edmsha14161fb8137d01p18b9d0jsn9c68138c30f6",
      "X-RapidAPI-Host": "transfermarkt-db.p.rapidapi.com",
    },
  };
  if (updateRequired) {
    try {
      const response = await axios.request(options);
      res.json(response.data);
      console.log(response.data);
      fs.writeFileSync("bundesliga.json", JSON.stringify(response.data));
      updatedList.data.find(
        (league) => league.name === "bundesliga"
      ).timestamp = new Date();
      console.log(updatedList);
      fs.writeFileSync("update-list.json", JSON.stringify(updatedList));
    } catch (error) {
      console.error(error);
    }
  } else {
    if (fs.existsSync("bundesliga.json")) {
      const data = fs.readFileSync("bundesliga.json");
      res.json(JSON.parse(data));
    } else {
      try {
        const response = await axios.request(options);
        res.json(response.data);
        console.log(response.data);
        fs.writeFileSync("bundesliga.json", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    }
  }
});

app.get("/la-liga", async (req, res) => {
  let updateRequired = false;
  let updatedList = fs.readFileSync("update-list.json", "utf-8");
  updatedList = JSON.parse(updatedList);
  console.log(updateRequired);
  if (
    new Date() -
      new Date(
        updatedList.data.find((league) => league.name === "la-liga").timestamp
      ).getTime() >
    86400000
  ) {
    updateRequired = true;
  }
  const options = {
    method: "GET",
    url: "https://transfermarkt-db.p.rapidapi.com/v1/transfers/list",
    params: {
      locale: "UK",
      competition_id: "ES1",
      top_transfers_first: "false",
    },
    headers: {
      "X-RapidAPI-Key": "33d0bc40edmsha14161fb8137d01p18b9d0jsn9c68138c30f6",
      "X-RapidAPI-Host": "transfermarkt-db.p.rapidapi.com",
    },
  };
  if (updateRequired) {
    try {
      const response = await axios.request(options);
      res.json(response.data);
      console.log(response.data);
      fs.writeFileSync("la-liga.json", JSON.stringify(response.data));
      updatedList.data.find((league) => league.name === "la-liga").timestamp =
        new Date();
      console.log(updatedList);
      fs.writeFileSync("update-list.json", JSON.stringify(updatedList));
    } catch (error) {
      console.error(error);
    }
  } else {
    if (fs.existsSync("la-liga.json")) {
      const data = fs.readFileSync("la-liga.json");
      res.json(JSON.parse(data));
    } else {
      try {
        const response = await axios.request(options);
        res.json(response.data);
        console.log(response.data);
        fs.writeFileSync("la-liga.json", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    }
  }
});

app.get("/serie-a", async (req, res) => {
  let updateRequired = false;
  let updatedList = fs.readFileSync("update-list.json", "utf-8");
  updatedList = JSON.parse(updatedList);
  console.log(updateRequired);
  if (
    new Date() -
      new Date(
        updatedList.data.find((league) => league.name === "serie-a").timestamp
      ).getTime() >
    86400000
  ) {
    updateRequired = true;
  }
  const options = {
    method: "GET",
    url: "https://transfermarkt-db.p.rapidapi.com/v1/transfers/list",
    params: {
      locale: "UK",
      competition_id: "IT1",
      top_transfers_first: "false",
    },
    headers: {
      "X-RapidAPI-Key": "33d0bc40edmsha14161fb8137d01p18b9d0jsn9c68138c30f6",
      "X-RapidAPI-Host": "transfermarkt-db.p.rapidapi.com",
    },
  };
  if (updateRequired) {
    try {
      const response = await axios.request(options);
      res.json(response.data);
      console.log(response.data);
      fs.writeFileSync("serie-a.json", JSON.stringify(response.data));
      updatedList.data.find((league) => league.name === "serie-a").timestamp =
        new Date();
      console.log(updatedList);
      fs.writeFileSync("update-list.json", JSON.stringify(updatedList));
    } catch (error) {
      console.error(error);
    }
  } else {
    if (fs.existsSync("serie-a.json")) {
      const data = fs.readFileSync("serie-a.json");
      res.json(JSON.parse(data));
    } else {
      try {
        const response = await axios.request(options);
        res.json(response.data);
        console.log(response.data);
        fs.writeFileSync("serie-a.json", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    }
  }
});

app.get("/ligue-1", async (req, res) => {
  let updateRequired = false;
  let updatedList = fs.readFileSync("update-list.json", "utf-8");
  updatedList = JSON.parse(updatedList);
  console.log(updateRequired);
  if (
    new Date() -
      new Date(
        updatedList.data.find((league) => league.name === "ligue-1").timestamp
      ).getTime() >
    86400000
  ) {
    updateRequired = true;
  }
  const options = {
    method: "GET",
    url: "https://transfermarkt-db.p.rapidapi.com/v1/transfers/list",
    params: {
      locale: "UK",
      competition_id: "FR1",
      top_transfers_first: "false",
    },
    headers: {
      "X-RapidAPI-Key": "33d0bc40edmsha14161fb8137d01p18b9d0jsn9c68138c30f6",
      "X-RapidAPI-Host": "transfermarkt-db.p.rapidapi.com",
    },
  };
  if (updateRequired) {
    try {
      const response = await axios.request(options);
      res.json(response.data);
      console.log(response.data);
      fs.writeFileSync("ligue-1.json", JSON.stringify(response.data));
      updatedList.data.find((league) => league.name === "ligue-1").timestamp =
        new Date();
      console.log(updatedList);
      fs.writeFileSync("update-list.json", JSON.stringify(updatedList));
    } catch (error) {
      console.error(error);
    }
  } else {
    if (fs.existsSync("ligue-1.json")) {
      const data = fs.readFileSync("ligue-1.json");
      res.json(JSON.parse(data));
    } else {
      try {
        const response = await axios.request(options);
        res.json(response.data);
        console.log(response.data);
        fs.writeFileSync("ligue-1.json", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    }
  }
});

app.get("/hk-premier-league", async (req, res) => {
  let updateRequired = false;
  let updatedList = fs.readFileSync("update-list.json", "utf-8");
  updatedList = JSON.parse(updatedList);
  console.log(updateRequired);
  if (
    new Date() -
      new Date(
        updatedList.data.find(
          (league) => league.name === "hk-premier-league"
        ).timestamp
      ).getTime() >
    86400000
  ) {
    updateRequired = true;
  }
  const options = {
    method: "GET",
    url: "https://transfermarkt-db.p.rapidapi.com/v1/transfers/list",
    params: {
      locale: "UK",
      competition_id: "HGKG",
      top_transfers_first: "false",
    },
    headers: {
      "X-RapidAPI-Key": "33d0bc40edmsha14161fb8137d01p18b9d0jsn9c68138c30f6",
      "X-RapidAPI-Host": "transfermarkt-db.p.rapidapi.com",
    },
  };
  if (updateRequired) {
    try {
      const response = await axios.request(options);
      res.json(response.data);
      console.log(response.data);
      fs.writeFileSync("hk-premier-league.json", JSON.stringify(response.data));
      updatedList.data.find(
        (league) => league.name === "hk-premier-league"
      ).timestamp = new Date();
      console.log(updatedList);
      fs.writeFileSync("update-list.json", JSON.stringify(updatedList));
    } catch (error) {
      console.error(error);
    }
  } else {
    if (fs.existsSync("hk-premier-league.json")) {
      const data = fs.readFileSync("hk-premier-league.json");
      res.json(JSON.parse(data));
    } else {
      try {
        const response = await axios.request(options);
        res.json(response.data);
        console.log(response.data);
        fs.writeFileSync(
          "hk-premier-league.json",
          JSON.stringify(response.data)
        );
      } catch (error) {
        console.error(error);
      }
    }
  }
});

app.get("/eredivisie", async (req, res) => {
  let updateRequired = false;
  let updatedList = fs.readFileSync("update-list.json", "utf-8");
  updatedList = JSON.parse(updatedList);
  console.log(updateRequired);
  if (
    new Date() -
      new Date(
        updatedList.data.find(
          (league) => league.name === "eredivisie"
        ).timestamp
      ).getTime() >
    86400000
  ) {
    updateRequired = true;
  }
  const options = {
    method: "GET",
    url: "https://transfermarkt-db.p.rapidapi.com/v1/transfers/list",
    params: {
      locale: "UK",
      competition_id: "NL1",
      top_transfers_first: "false",
    },
    headers: {
      "X-RapidAPI-Key": "33d0bc40edmsha14161fb8137d01p18b9d0jsn9c68138c30f6",
      "X-RapidAPI-Host": "transfermarkt-db.p.rapidapi.com",
    },
  };
  if (updateRequired) {
    try {
      const response = await axios.request(options);
      res.json(response.data);
      console.log(response.data);
      fs.writeFileSync("eredivisie.json", JSON.stringify(response.data));
      updatedList.data.find(
        (league) => league.name === "eredivisie"
      ).timestamp = new Date();
      console.log(updatedList);
      fs.writeFileSync("update-list.json", JSON.stringify(updatedList));
    } catch (error) {
      console.error(error);
    }
  } else {
    if (fs.existsSync("eredivisie.json")) {
      const data = fs.readFileSync("eredivisie.json");
      res.json(JSON.parse(data));
    } else {
      try {
        const response = await axios.request(options);
        res.json(response.data);
        console.log(response.data);
        fs.writeFileSync("eredivisie.json", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    }
  }
});

app.get("/liga-portugal", async (req, res) => {
  let updateRequired = false;
  let updatedList = fs.readFileSync("update-list.json", "utf-8");
  updatedList = JSON.parse(updatedList);
  console.log(updateRequired);
  if (
    new Date() -
      new Date(
        updatedList.data.find(
          (league) => league.name === "liga-portugal"
        ).timestamp
      ).getTime() >
    86400000
  ) {
    updateRequired = true;
  }
  const options = {
    method: "GET",
    url: "https://transfermarkt-db.p.rapidapi.com/v1/transfers/list",
    params: {
      locale: "UK",
      competition_id: "PO1",
      top_transfers_first: "false",
    },
    headers: {
      "X-RapidAPI-Key": "33d0bc40edmsha14161fb8137d01p18b9d0jsn9c68138c30f6",
      "X-RapidAPI-Host": "transfermarkt-db.p.rapidapi.com",
    },
  };
  if (updateRequired) {
    try {
      const response = await axios.request(options);
      res.json(response.data);
      console.log(response.data);
      fs.writeFileSync("liga-portugal.json", JSON.stringify(response.data));
      updatedList.data.find(
        (league) => league.name === "liga-portugal"
      ).timestamp = new Date();
      console.log(updatedList);
      fs.writeFileSync("update-list.json", JSON.stringify(updatedList));
    } catch (error) {
      console.error(error);
    }
  } else {
    if (fs.existsSync("liga-portugal.json")) {
      const data = fs.readFileSync("liga-portugal.json");
      res.json(JSON.parse(data));
    } else {
      try {
        const response = await axios.request(options);
        res.json(response.data);
        console.log(response.data);
        fs.writeFileSync("liga-portugal.json", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    }
  }
});

app.get("/super-lig", async (req, res) => {
  let updateRequired = false;
  let updatedList = fs.readFileSync("update-list.json", "utf-8");
  updatedList = JSON.parse(updatedList);
  console.log(updateRequired);
  if (
    new Date() -
      new Date(
        updatedList.data.find((league) => league.name === "super-lig").timestamp
      ).getTime() >
    86400000
  ) {
    updateRequired = true;
  }
  const options = {
    method: "GET",
    url: "https://transfermarkt-db.p.rapidapi.com/v1/transfers/list",
    params: {
      locale: "UK",
      competition_id: "TR1",
      top_transfers_first: "false",
    },
    headers: {
      "X-RapidAPI-Key": "33d0bc40edmsha14161fb8137d01p18b9d0jsn9c68138c30f6",
      "X-RapidAPI-Host": "transfermarkt-db.p.rapidapi.com",
    },
  };
  if (updateRequired) {
    try {
      const response = await axios.request(options);
      res.json(response.data);
      console.log(response.data);
      fs.writeFileSync("super-lig.json", JSON.stringify(response.data));
      updatedList.data.find((league) => league.name === "super-lig").timestamp =
        new Date();
      console.log(updatedList);
      fs.writeFileSync("update-list.json", JSON.stringify(updatedList));
    } catch (error) {
      console.error(error);
    }
  } else {
    if (fs.existsSync("super-lig.json")) {
      const data = fs.readFileSync("super-lig.json");
      res.json(JSON.parse(data));
    } else {
      try {
        const response = await axios.request(options);
        res.json(response.data);
        console.log(response.data);
        fs.writeFileSync("super-lig.json", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    }
  }
});

app.get("/saudi-pro-league", async (req, res) => {
  let updateRequired = false;
  let updatedList = fs.readFileSync("update-list.json", "utf-8");
  updatedList = JSON.parse(updatedList);
  console.log(updateRequired);
  if (
    new Date() -
      new Date(
        updatedList.data.find(
          (league) => league.name === "saudi-pro-league"
        ).timestamp
      ).getTime() >
    86400000
  ) {
    updateRequired = true;
  }
  const options = {
    method: "GET",
    url: "https://transfermarkt-db.p.rapidapi.com/v1/transfers/list",
    params: {
      locale: "UK",
      competition_id: "SA1",
      top_transfers_first: "true",
    },
    headers: {
      "X-RapidAPI-Key": "33d0bc40edmsha14161fb8137d01p18b9d0jsn9c68138c30f6",
      "X-RapidAPI-Host": "transfermarkt-db.p.rapidapi.com",
    },
  };
  if (updateRequired) {
    try {
      const response = await axios.request(options);
      res.json(response.data);
      console.log(response.data);
      fs.writeFileSync("saudi-pro-league.json", JSON.stringify(response.data));
      updatedList.data.find(
        (league) => league.name === "saudi-pro-league"
      ).timestamp = new Date();
      console.log(updatedList);
      fs.writeFileSync("update-list.json", JSON.stringify(updatedList));
    } catch (error) {
      console.error(error);
    }
  } else {
    if (fs.existsSync("saudi-pro-league.json")) {
      const data = fs.readFileSync("saudi-pro-league.json");
      res.json(JSON.parse(data));
    } else {
      try {
        const response = await axios.request(options);
        res.json(response.data);
        console.log(response.data);
        fs.writeFileSync(
          "saudi-pro-league.json",
          JSON.stringify(response.data)
        );
      } catch (error) {
        console.error(error);
      }
    }
  }
});

app.get("/j1-league", async (req, res) => {
  let updateRequired = false;
  let updatedList = fs.readFileSync("update-list.json", "utf-8");
  updatedList = JSON.parse(updatedList);
  console.log(updateRequired);
  if (
    new Date() -
      new Date(
        updatedList.data.find((league) => league.name === "j1-league").timestamp
      ).getTime() >
    86400000
  ) {
    updateRequired = true;
  }
  const options = {
    method: "GET",
    url: "https://transfermarkt-db.p.rapidapi.com/v1/transfers/list",
    params: {
      locale: "UK",
      competition_id: "JAP1",
      top_transfers_first: "true",
    },
    headers: {
      "X-RapidAPI-Key": "33d0bc40edmsha14161fb8137d01p18b9d0jsn9c68138c30f6",
      "X-RapidAPI-Host": "transfermarkt-db.p.rapidapi.com",
    },
  };
  if (updateRequired) {
    try {
      const response = await axios.request(options);
      res.json(response.data);
      console.log(response.data);
      fs.writeFileSync("j1-league.json", JSON.stringify(response.data));
      updatedList.data.find((league) => league.name === "j1-league").timestamp =
        new Date();
      console.log(updatedList);
      fs.writeFileSync("update-list.json", JSON.stringify(updatedList));
    } catch (error) {
      console.error(error);
    }
  } else {
    if (fs.existsSync("j1-league.json")) {
      const data = fs.readFileSync("j1-league.json");
      res.json(JSON.parse(data));
    } else {
      try {
        const response = await axios.request(options);
        res.json(response.data);
        console.log(response.data);
        fs.writeFileSync("j1-league.json", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    }
  }
});

app.get("/uae-pro-league", async (req, res) => {
  let updateRequired = false;
  let updatedList = fs.readFileSync("update-list.json", "utf-8");
  updatedList = JSON.parse(updatedList);
  console.log(updateRequired);
  if (
    new Date() -
      new Date(
        updatedList.data.find(
          (league) => league.name === "uae-pro-league"
        ).timestamp
      ).getTime() >
    86400000
  ) {
    updateRequired = true;
  }
  const options = {
    method: "GET",
    url: "https://transfermarkt-db.p.rapidapi.com/v1/transfers/list",
    params: {
      locale: "UK",
      competition_id: "UAE1",
      top_transfers_first: "true",
    },
    headers: {
      "X-RapidAPI-Key": "33d0bc40edmsha14161fb8137d01p18b9d0jsn9c68138c30f6",
      "X-RapidAPI-Host": "transfermarkt-db.p.rapidapi.com",
    },
  };
  if (updateRequired) {
    try {
      const response = await axios.request(options);
      res.json(response.data);
      console.log(response.data);
      fs.writeFileSync("uae-pro-league.json", JSON.stringify(response.data));
      updatedList.data.find(
        (league) => league.name === "uae-pro-league"
      ).timestamp = new Date();
      console.log(updatedList);
      fs.writeFileSync("update-list.json", JSON.stringify(updatedList));
    } catch (error) {
      console.error(error);
    }
  } else {
    if (fs.existsSync("uae-pro-league.json")) {
      const data = fs.readFileSync("uae-pro-league.json");
      res.json(JSON.parse(data));
    } else {
      try {
        const response = await axios.request(options);
        res.json(response.data);
        console.log(response.data);
        fs.writeFileSync("uae-pro-league.json", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    }
  }
});

app.get("/k-league-1", async (req, res) => {
  let updateRequired = false;
  let updatedList = fs.readFileSync("update-list.json", "utf-8");
  updatedList = JSON.parse(updatedList);
  console.log(updateRequired);
  if (
    new Date() -
      new Date(
        updatedList.data.find(
          (league) => league.name === "k-league-1"
        ).timestamp
      ).getTime() >
    86400000
  ) {
    updateRequired = true;
  }
  const options = {
    method: "GET",
    url: "https://transfermarkt-db.p.rapidapi.com/v1/transfers/list",
    params: {
      locale: "UK",
      competition_id: "RSK1",
      top_transfers_first: "true",
    },
    headers: {
      "X-RapidAPI-Key": "33d0bc40edmsha14161fb8137d01p18b9d0jsn9c68138c30f6",
      "X-RapidAPI-Host": "transfermarkt-db.p.rapidapi.com",
    },
  };
  if (updateRequired) {
    try {
      const response = await axios.request(options);
      res.json(response.data);
      console.log(response.data);
      fs.writeFileSync("k-league-1.json", JSON.stringify(response.data));
      updatedList.data.find(
        (league) => league.name === "k-league-1"
      ).timestamp = new Date();
      console.log(updatedList);
      fs.writeFileSync("update-list.json", JSON.stringify(updatedList));
    } catch (error) {
      console.error(error);
    }
  } else {
    if (fs.existsSync("k-league-1.json")) {
      const data = fs.readFileSync("k-league-1.json");
      res.json(JSON.parse(data));
    } else {
      try {
        const response = await axios.request(options);
        res.json(response.data);
        console.log(response.data);
        fs.writeFileSync("k-league-1.json", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    }
  }
});

app.get("/qatar-stars-league", async (req, res) => {
  let updateRequired = false;
  let updatedList = fs.readFileSync("update-list.json", "utf-8");
  updatedList = JSON.parse(updatedList);
  console.log(updateRequired);
  if (
    new Date() -
      new Date(
        updatedList.data.find(
          (league) => league.name === "qatar-stars-league"
        ).timestamp
      ).getTime() >
    86400000
  ) {
    updateRequired = true;
  }
  const options = {
    method: "GET",
    url: "https://transfermarkt-db.p.rapidapi.com/v1/transfers/list",
    params: {
      locale: "UK",
      competition_id: "QSL",
      top_transfers_first: "true",
    },
    headers: {
      "X-RapidAPI-Key": "33d0bc40edmsha14161fb8137d01p18b9d0jsn9c68138c30f6",
      "X-RapidAPI-Host": "transfermarkt-db.p.rapidapi.com",
    },
  };
  if (updateRequired) {
    try {
      const response = await axios.request(options);
      res.json(response.data);
      console.log(response.data);
      fs.writeFileSync(
        "qatar-stars-league.json",
        JSON.stringify(response.data)
      );
      updatedList.data.find(
        (league) => league.name === "qatar-stars-league"
      ).timestamp = new Date();
      console.log(updatedList);
      fs.writeFileSync("update-list.json", JSON.stringify(updatedList));
    } catch (error) {
      console.error(error);
    }
  } else {
    if (fs.existsSync("qatar-stars-league.json")) {
      const data = fs.readFileSync("qatar-stars-league.json");
      res.json(JSON.parse(data));
    } else {
      try {
        const response = await axios.request(options);
        res.json(response.data);
        console.log(response.data);
        fs.writeFileSync(
          "qatar-stars-league.json",
          JSON.stringify(response.data)
        );
      } catch (error) {
        console.error(error);
      }
    }
  }
});

app.get("/australia-a-league", async (req, res) => {
  let updateRequired = false;
  let updatedList = fs.readFileSync("update-list.json", "utf-8");
  updatedList = JSON.parse(updatedList);
  console.log(updateRequired);
  if (
    new Date() -
      new Date(
        updatedList.data.find(
          (league) => league.name === "australia-a-league"
        ).timestamp
      ).getTime() >
    86400000
  ) {
    updateRequired = true;
  }
  const options = {
    method: "GET",
    url: "https://transfermarkt-db.p.rapidapi.com/v1/transfers/list",
    params: {
      locale: "UK",
      competition_id: "AUS1",
      top_transfers_first: "true",
    },
    headers: {
      "X-RapidAPI-Key": "33d0bc40edmsha14161fb8137d01p18b9d0jsn9c68138c30f6",
      "X-RapidAPI-Host": "transfermarkt-db.p.rapidapi.com",
    },
  };
  if (updateRequired) {
    try {
      const response = await axios.request(options);
      res.json(response.data);
      console.log(response.data);
      fs.writeFileSync(
        "australia-a-league.json",
        JSON.stringify(response.data)
      );
      updatedList.data.find(
        (league) => league.name === "australia-a-league"
      ).timestamp = new Date();
      console.log(updatedList);
      fs.writeFileSync("update-list.json", JSON.stringify(updatedList));
    } catch (error) {
      console.error(error);
    }
  } else {
    if (fs.existsSync("australia-a-league.json")) {
      const data = fs.readFileSync("australia-a-league.json");
      res.json(JSON.parse(data));
    } else {
      try {
        const response = await axios.request(options);
        res.json(response.data);
        console.log(response.data);
        fs.writeFileSync(
          "australia-a-league.json",
          JSON.stringify(response.data)
        );
      } catch (error) {
        console.error(error);
      }
    }
  }
});

app.get("/major-league-soccer", async (req, res) => {
  let updateRequired = false;
  let updatedList = fs.readFileSync("update-list.json", "utf-8");
  updatedList = JSON.parse(updatedList);
  console.log(updateRequired);
  if (
    new Date() -
      new Date(
        updatedList.data.find(
          (league) => league.name === "major-league-soccer"
        ).timestamp
      ).getTime() >
    86400000
  ) {
    updateRequired = true;
  }
  const options = {
    method: "GET",
    url: "https://transfermarkt-db.p.rapidapi.com/v1/transfers/list",
    params: {
      locale: "UK",
      competition_id: "MLS1",
      top_transfers_first: "true",
    },
    headers: {
      "X-RapidAPI-Key": "33d0bc40edmsha14161fb8137d01p18b9d0jsn9c68138c30f6",
      "X-RapidAPI-Host": "transfermarkt-db.p.rapidapi.com",
    },
  };
  if (updateRequired) {
    try {
      const response = await axios.request(options);
      res.json(response.data);
      console.log(response.data);
      fs.writeFileSync(
        "major-league-soccer.json",
        JSON.stringify(response.data)
      );
      updatedList.data.find(
        (league) => league.name === "major-league-soccer"
      ).timestamp = new Date();
      console.log(updatedList);
      fs.writeFileSync("update-list.json", JSON.stringify(updatedList));
    } catch (error) {
      console.error(error);
    }
  } else {
    if (fs.existsSync("major-league-soccer.json")) {
      const data = fs.readFileSync("major-league-soccer.json");
      res.json(JSON.parse(data));
    } else {
      try {
        const response = await axios.request(options);
        res.json(response.data);
        console.log(response.data);
        fs.writeFileSync(
          "major-league-soccer.json",
          JSON.stringify(response.data)
        );
      } catch (error) {
        console.error(error);
      }
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
