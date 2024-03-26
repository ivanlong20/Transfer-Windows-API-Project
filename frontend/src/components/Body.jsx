import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Filter from "./Filter";
import PlayerCard from "./PlayerCard";

function Body(props) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch("/premier-league")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

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
      <Filter theme={props.theme} />
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
