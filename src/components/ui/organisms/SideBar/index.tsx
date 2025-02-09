import React from "react";
import { Drawer as MuiDrawer, styled } from "@mui/material";

import { Routes } from "./Routes";

import { DRAWER_WIDTH } from "@/utils/constants";
import { navClosedMixin, navOpenedMixin } from "@/styles/mixins";

// PENDIN
const Sidebar: React.FC = () => {
  return (
    <Drawer variant="permanent">
      <Routes />
    </Drawer>
  );
};

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...navOpenedMixin(theme),
    "& .MuiDrawer-paper": navOpenedMixin(theme),
  }),
  ...(!open && {
    ...navClosedMixin(theme),
    "& .MuiDrawer-paper": navClosedMixin(theme),
  }),
}));

export default Sidebar;
