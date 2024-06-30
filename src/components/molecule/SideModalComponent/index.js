import { Close } from "@mui/icons-material";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React from "react";

const SideModalComponen = ({
  children,
  open = false,
  title = "",
  onClose = () => {},
}) => {
  return (
    <Drawer anchor="right" open={open}>
      <Box sx={{ minWidth: "450px" }} className="p-3">
        <Box className="d-flex align-items-center justify-content-between">
          <Typography className="fs-1p3rem">{title}</Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        <Box className="py-2">{children}</Box>
      </Box>
    </Drawer>
  );
};

export default SideModalComponen;
