import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import "./AutoCompleteListItem.css";
import { IMAGE_URL } from "../../../constants";

const AutoCompleteListItem = ({ movie, highLight }) => {
  return (
    <div>
      <ListItem
        alignItems="flex-start"
        style={{ backgroundColor: highLight ? "lightgray" : "white" }}
      >
        <ListItemAvatar>
          <Avatar alt={movie.title} src={`${IMAGE_URL}${movie.poster_path}`} />
        </ListItemAvatar>
        <ListItemText
          primary={movie.original_title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className="ac-li-secondary-text"
                color="textPrimary"
              >
                Release Date
              </Typography>
              {` - ${movie.release_date}`}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};

export default AutoCompleteListItem;
