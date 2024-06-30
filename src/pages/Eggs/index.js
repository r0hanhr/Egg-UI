import { Box, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import InputBoxComponent from "../../components/atom/InputBoxComponent";
import { Tune } from "@mui/icons-material";
import TabListComponent from "../../components/molecule/TabListComponent";
import ReceivedEggs from "./ReceivedEggs";
import Incubation from "./Incubation";

const tabList = [
  {
    label: "Received",
    children: <ReceivedEggs />,
  },
  {
    label: "Incubation",
    children: <Incubation />,
  },
  {
    label: "Hatched",
    children: <Incubation />,
  },
  {
    label: "Discarded",
    children: <Incubation />,
  },
];

const Eggs = () => {
  return (
    <Paper className="rounded-2 p-3">
      <Box className="d-flex align-items-center justify-content-between">
        <Typography className="fs-1p3rem">Egg List</Typography>
        <Box className="d-flex align-items-center">
          <IconButton className="me-2">
            <Tune />
          </IconButton>
          <InputBoxComponent placeholder="Search" iconName="search" />
        </Box>
      </Box>

      <TabListComponent tabList={tabList} />
    </Paper>
  );
};

export default Eggs;
