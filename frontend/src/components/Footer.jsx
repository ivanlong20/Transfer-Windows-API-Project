import React from "react";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <footer>
      <Box sx={{ p: 3 }}>
        <p>© {new Date().getFullYear()}</p>
      </Box>
    </footer>
  );
}

export default Footer;
