import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { DietModules, EggModules } from "../../../constants/NavConstants";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "#1F515B",
});

const closedMixin = theme => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 10px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 10px)`,
  },
  background: "#1F515B",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SidebarComponent = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = path => {
    navigate(path);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ pl: 2.5, pr: 1.5, pt: 1.5 }}
      >
        <Box alignItems="center" sx={{ display: open ? "flex" : "none" }}>
          <img src="/assets/Logo.svg" alt="LOGO" />
          <Typography className="mb-0 color-white fs-1p3rem fw-700 ms-2">
            Materialize
          </Typography>
        </Box>
        <IconButton onClick={() => setOpen(!open)}>
          <img src="/assets/menu-arrow.svg" alt="Arrow" />
        </IconButton>
      </Box>
      <Box
        display={open ? "flex" : "none"}
        alignItems="center"
        className="mt-4 mb-2"
      >
        <img src="/assets/Line.svg" alt="line" />
        <Typography className="color-white fs-p8rem fw-400 ms-3">
          Egg Module
        </Typography>
      </Box>
      <List>
        {EggModules.map(item => (
          <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
            <Tooltip
              disableHoverListener={open}
              placement="right"
              title={item.label}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  mx: 1,
                }}
                className={
                  location.pathname?.split("/").includes(item.path)
                    ? "selected-tab"
                    : ""
                }
                onClick={() => handleNavigate(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <img src="/assets/list-icon.svg" alt="nav-icon" />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{ display: open ? "block" : "none" }}
                  className="color-white"
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Box
        display={open ? "flex" : "none"}
        alignItems="center"
        className="mt-4 mb-2"
      >
        <img src="/assets/Line.svg" alt="line" />
        <Typography className="color-white fs-p8rem fw-400 ms-3">
          DIET
        </Typography>
      </Box>
      <List>
        {DietModules.map(item => (
          <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
            <Tooltip
              disableHoverListener={open}
              placement="right"
              title={item.label}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  mx: 1,
                }}
                className={
                  location.pathname?.split("/").includes(item.path)
                    ? "selected-tab"
                    : ""
                }
                onClick={() => handleNavigate(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <img src="/assets/list-icon.svg" alt="Arrow" />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{ opacity: open ? 1 : 0 }}
                  className="color-white"
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SidebarComponent;
