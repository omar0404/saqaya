import React from "react";
import Nav from "./components/Nav";
import Routes from "./routes";

import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { greyDark, greyLighter } from "./theme/colors";
import { PlaylistsProvider } from "./context/Playlists";

const theme = createTheme({
  palette: {
    primary: {
      main: greyDark,
    },
    secondary: {
      main: greyLighter,
    },
    info: {
      main: "#ffff",
    },
  },
});
const App = () => {
  return (
    <div className="outerWrap">
      <div className="App">
        <ThemeProvider theme={theme}>
          <PlaylistsProvider>
            <Nav />
            <Routes />
          </PlaylistsProvider>
        </ThemeProvider>
      </div>
      <div className="musicControls">music controls</div>
    </div>
  );
};

export default App;
