import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// Displays header for the application
export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Search Autocomplete Application (using Movie DB)
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
