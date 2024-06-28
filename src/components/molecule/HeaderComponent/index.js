import { Box, IconButton } from "@mui/material";
import React from "react";

const HeaderComponent = () => {
  return (
    <Box
      className="px-3"
      display="flex"
      justifyContent="end"
      alignItems="center"
    >
      <IconButton>
        <img src="assets/full-screen.svg" alt="Full screen" />
      </IconButton>
      <IconButton>
        <img src="assets/notifications.svg" alt="Notification" />
      </IconButton>
      <IconButton>
        <img src="assets/Avatar.svg" alt="Profile" />
      </IconButton>
    </Box>
  );
};

export default HeaderComponent;
