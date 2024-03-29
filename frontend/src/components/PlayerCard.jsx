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
import players_secondary from "../assets/players_secondary.json";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ScheduleIcon from "@mui/icons-material/Schedule";

let notFoundPlayer = [];
let notFoundClub = [];

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
  // {
  //   console.log(props.player);
  // }

  let footballer = players.data.find(
    (player) => player.player_id == props.player.playerID
  );
  // console.log("First" + footballer);

  if (footballer == undefined) {
    footballer = players_secondary.data.find(
      (player) => player.player_id == props.player.playerID
    );
  }

  const clubFrom = clubs.data.find(
    (club) => club.club_id == props.player.fromClubID
  );
  const clubTo = clubs.data.find(
    (club) => club.club_id == props.player.toClubID
  );

  if (clubFrom == undefined) {
    if (!notFoundClub.includes(props.player.fromClubID)) {
      notFoundClub.push(props.player.fromClubID);
    }
  } else if (clubTo == undefined) {
    if (!notFoundClub.includes(props.player.toClubID)) {
      notFoundClub.push(props.player.toClubID);
    }
  }
  if (footballer == undefined) {
    if (!notFoundPlayer.includes(props.player.playerID)) {
      notFoundPlayer.push(props.player.playerID);
    }
  }
  console.log("Club:" + notFoundClub);
  console.log("Player:" + notFoundPlayer);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 350,
        margin: "10px",
        fontFamily: "Nunito Sans",
        backgroundColor: props.theme.palette.primary.background,
        color: props.theme.palette.primary.contrastText,
        justifyContent: "space-between",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body2" sx={{ marginBottom: 0 }} gutterBottom>
              {props.player.season} Season
            </Typography>

            <Typography
              sx={{
                display: "flex",
                fontSize: 14,
                alignSelf: "end",
                alignItems: "center",
                gap: "3px",
              }}
              color="text.secondary"
              gutterBottom
            >
              <ScheduleIcon
                sx={{
                  fontSize: 14,
                  display: "inline-block",
                }}
              />
              {new Date(props.player.transferredAt * 1000).toLocaleDateString()}
            </Typography>
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
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {props.player.transferFee.value == "?" ||
              props.player.transferFee.value == "-"
                ? "N/A"
                : props.player.transferFee.value == "free transfer"
                ? "Free"
                : Math.round(props.player.transferFee.value / 1000000).toFixed(
                    2
                  ) +
                  "M " +
                  props.player.transferFee.currency}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
              {footballer !== undefined ? footballer.name : "N/A"}
            </Typography>
            <Typography
              sx={{ mb: 1.5, textAlign: "center" }}
              color="text.secondary"
            >
              {footballer !== undefined && footballer.position !== undefined
                ? footballer.position + " | "
                : "N/A"}
              {footballer !== undefined &&
              footballer.date_of_birth !== undefined
                ? getAge(footballer.date_of_birth) + " | "
                : null}
              {footballer !== undefined &&
              footballer.country_of_citizenship !== undefined
                ? footballer.country_of_citizenship
                : null}
            </Typography>
          </Box>
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
              {clubFrom !== undefined ? (
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
            <ArrowCircleRightIcon />
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
              {clubTo !== undefined ? (
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

            {clubTo !== undefined ? (
              clubTo.name == "Karriereende" ? (
                <Typography
                  variant="body2"
                  sx={{
                    width: "10em",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  End of Career
                </Typography>
              ) : (
                <Typography
                  variant="body2"
                  sx={{
                    width: "10em",
                    textAlign: "center",
                  }}
                >
                  {clubTo.name}
                </Typography>
              )
            ) : (
              <Typography
                variant="body2"
                sx={{ width: "10em", textAlign: "center" }}
              >
                N/A
              </Typography>
            )}
          </Box>
        </Box>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardActions
          sx={{
            alignSelf: "end",
            marginBottom: "10px",
          }}
        >
          <a
            href={
              footballer !== undefined && footballer.url !== undefined
                ? footballer.url
                : null
            }
            target="_blank"
          >
            <Button
              size="small"
              sx={{
                alignSelf: "end",
                color: props.theme.palette.primary.contrastText,
                textTransform: "none",
              }}
            >
              More <ArrowForwardIcon />
            </Button>
          </a>
        </CardActions>
      </Box>
    </Card>
  );
}
