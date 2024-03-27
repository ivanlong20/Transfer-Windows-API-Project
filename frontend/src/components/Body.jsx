import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Filter from "./Filter";
import PlayerCard from "./PlayerCard";

function Body(props) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [filter, setFilter] = React.useState();

  useEffect(() => {
    fetch("/premier-league")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  function selectLeague(name) {
    setFilter(name);
    if (name === "Bundesliga") {
      fetch("/bundesliga")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Premier League") {
      fetch("/premier-league")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "La Liga") {
      fetch("/la-liga")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Serie A") {
      fetch("/serie-a")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Ligue 1") {
      fetch("/ligue-1")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Hong Kong Premier League") {
      fetch("/hk-premier-league")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Eredivisie") {
      fetch("/eredivisie")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Liga Portugal") {
      fetch("/liga-portugal")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Super Lig") {
      fetch("/super-lig")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "J1 League") {
      fetch("/j1-league")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "K League 1") {
      fetch("/k-league-1")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "A-League") {
      fetch("/australia-a-league")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "MLS") {
      fetch("/major-league-soccer")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Saudi Pro League") {
      fetch("/saudi-pro-league")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "UAE Pro League") {
      fetch("/uae-pro-league")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else if (name === "Qatar Stars League") {
      fetch("/qatar-stars-league")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }
    console.log(name);
  }
  // console.log(await data.data[0].playerID);

  return (
    <Box
      height="100%"
      component="main"
      sx={{
        mt: 8,
        p: 3,
        justifyContent: "center",
      }}
      className={
        props.mode === "light" ? "light-background" : "dark-background"
      }
    >
      <Filter theme={props.theme} selectLeague={selectLeague} filter={filter} />
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {!loading ? (
          data.data.map((player) => (
            <PlayerCard theme={props.theme} player={player} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Box>
    </Box>
  );
}

export default Body;
