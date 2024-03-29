import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;
const navItems = ["Recent Transfers"];

function Header(props) {
  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== "amir") setScrollState("amir");
      } else {
        if (scrollState !== "top") setScrollState("top");
      }
    });

    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  const { window } = props;

  const drawer = (
    <Box onClick={props.handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TranSoccer
      </Typography>
      <Divider />
      <List
        sx={{
          textAlign: "center",
        }}
      >
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <IconButton
        sx={{ ml: 1 }}
        onClick={props.colorMode.toggleColorMode}
        color="inherit"
      >
        {props.theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar
        id={props.mode === "light" ? "navbar-light" : "navbar-dark"}
        className={scrollState === "top" ? null : "transition"}
        component="nav"
        elevation={0}
      >
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
             <MenuIcon /> 
          </IconButton> }*/}
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "", sm: "block" }, my: 2 }}
            className="logo"
          >
            TranSoccer
          </Typography>
          <div className="content-text">
            <Box sx={{ display: { xs: "block", sm: "block" } }}>
              {navItems.map((item) => (
                <a
                  className={
                    props.mode === "light" ? "nav-link-light" : "nav-link-dark"
                  }
                  href="#transfers"
                  style={{
                    textDecoration: "none",
                    textTransform: "none",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    backgroundColor:
                      scrollState === "top"
                        ? "rgba(57, 57, 57,  0)"
                        : props.theme.palette.primary.main,
                    color:
                      props.mode === "light"
                        ? scrollState === "top"
                          ? "#FAFAFA"
                          : "#222222"
                        : scrollState === "top"
                        ? "#FAFAFA"
                        : "#FAFAFA",
                  }}
                >
                  {item}
                </a>
              ))}
            </Box>
          </div>

          <IconButton
            sx={{ ml: 1 }}
            onClick={props.colorMode.toggleColorMode}
            color="inherit"
          >
            {props.theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: props.theme.palette.primary.main,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Header;
