import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" },
      }}>
      <List>
        <ListItem component={Link} to="/home">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} to="/customer">
          <ListItemText primary="Customer" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
