import React from "react";
import Box from "@mui/material/Box";

function Footer(props) {
  return (
    <footer>
      <Box
        sx={{ p: 3, backgroundColor: props.theme.palette.primary.background }}
      >
        <p>© {new Date().getFullYear()}</p>
      </Box>
    </footer>
  );
}

export default Footer;
