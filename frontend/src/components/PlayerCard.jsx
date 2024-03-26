import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import clubs from "../assets/clubs.json";
import competitions from "../assets/competitions.json";
import countries from "../assets/countries.json";
import players from "../assets/players.json";

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default function PlayerCard(props) {
  {
    console.log(props.player);
  }

  const footballer = players.data.find(
    (player) => player.player_id == props.player.playerID
  );

  const clubFrom = clubs.data.find(
    (club) => club.club_id == props.player.fromClubID
  );
  const clubTo = clubs.data.find(
    (club) => club.club_id == props.player.toClubID
  );
  // console.log(clubTo);
  // console.log(footballer);

  return (
    <Card
      sx={{
        minWidth: 275,
        margin: "10px",
        fontFamily: "Nunito Sans",
        backgroundColor: props.theme.palette.primary.background,
        color: props.theme.palette.primary.contrastText,
      }}
    >
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.player.season}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Avatar
              sx={{ width: 125, height: 125 }}
              src={footballer != undefined ? footballer.image_url : null}
            ></Avatar>
            <Typography variant="h5" component="div">
              {footballer != undefined ? footballer.first_name : "N/A"}{" "}
              {footballer != undefined && footballer.last_name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {footballer != undefined ? footballer.position + " | " : "N/A"}
              {footballer != undefined
                ? getAge(footballer.date_of_birth) + " | "
                : " | N/A"}
              {footballer != undefined
                ? footballer.country_of_citizenship
                : " | N/A"}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.player.transferFee.value == "?" ||
            props.player.transferFee.value == "-"
              ? "N/A"
              : props.player.transferFee.value == "free transfer"
              ? "Free"
              : props.player.transferFee.value / 1000000 +
                "M " +
                props.player.transferFee.currency}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2px",
            marginBottom: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" component="div">
              {clubFrom != undefined ? (
                <img
                  style={{ height: "80px" }}
                  src={
                    "https://tmssl.akamaized.net/images/wappen/head/" +
                    clubFrom.club_id +
                    ".png"
                  }
                />
              ) : (
                <Avatar style={{}} alt="N/A" />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ width: "10em", textAlign: "center" }}
            >
              {clubFrom != undefined ? clubFrom.name : "N/A"}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ alignSelf: "center" }}>
            To
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" component="div">
              {clubTo != undefined ? (
                <img
                  style={{ height: "80px" }}
                  src={
                    "https://tmssl.akamaized.net/images/wappen/head/" +
                    clubTo.club_id +
                    ".png"
                  }
                />
              ) : (
                <Avatar style={{}} alt="N/A" />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ width: "10em", textAlign: "center" }}
            >
              {clubTo != undefined ? clubTo.name : "N/A"}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <Typography variant="body2" sx={{ alignSelf: "" }}>
            {props.player.isLoan
              ? "Loan Transfer"
              : props.player.wasLoan
              ? "End of Loan"
              : "Permanent Transfer"}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{
            color: props.theme.palette.primary.contrastText,
            textTransform: "none",
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
