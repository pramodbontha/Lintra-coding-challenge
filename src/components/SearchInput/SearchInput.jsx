import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./SearchInput.css";

export const SearchInput = ({ searchInput, onSearchInputChange }) => {
  return (
    <>
      <Container maxWidth="sm" className="si-container">
        <Paper className="si-paper">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  variant="outlined"
                  placeholder="Enter movie name here..."
                  data-testid="search-input"
                  size="small"
                  value={searchInput}
                  onChange={(e) => onSearchInputChange(e.currentTarget.value)}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};
