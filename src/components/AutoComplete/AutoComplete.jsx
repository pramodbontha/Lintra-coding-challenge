import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import "./AutoComplete.css";
import AutoCompleteListItem from "./AutoCompleteListItem/AutoCompleteListItem";
import List from "@material-ui/core/List";

export const AutoComplete = ({ list }) => {
  return (
    <div>
      <Container maxWidth="sm" className="ac-container">
        <Paper className="ac-paper">
          {list.length && (
            <List>
              {list &&
                list.map((movie) => <AutoCompleteListItem movie={movie} />)}
            </List>
          )}
        </Paper>
      </Container>
    </div>
  );
};
