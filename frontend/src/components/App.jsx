import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode) => ({
  typography: {
    fontFamily: ["Nunito Sans", "sans-serif"].join(","),
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#FAFAFA",
            background: "#FAFAFA",
            contrastText: "#163020",
          },
          secondary: {
            main: "#F5F5F5",
            background: "#F5F5F5",
            contrastText: "#304D30",
          },
        }
      : {
          primary: {
            main: "#222222",
            background: "#222222",
            contrastText: "#EEF0E5",
          },
          secondary: {
            main: "#424242",
            background: "#424242",
            contrastText: "#B6C4B6",
          },
        }),
  },
});

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {/* <CssBaseline /> */}
          <Header
            sx={{ fontFamily: "Nunito Sans", display: "flex" }}
            theme={theme}
            mode={mode}
            colorMode={colorMode}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />

          <Body theme={theme} mode={mode} />
          <Footer theme={theme} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
