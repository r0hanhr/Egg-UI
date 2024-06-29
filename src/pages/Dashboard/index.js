import { Grid, Typography, Box, Paper } from "@mui/material";
import React from "react";
import DatePickerComponent from "../../components/atom/DatePickerComponent";
import InputBoxComponent from "../../components/atom/InputBoxComponent";
import DropDownComponent from "../../components/atom/DropDownComponent";
import TableComponent from "../../components/molecule/TableComponent";

const cards = [
  {
    icon: "/assets/egg-Icon.svg",
    count: "3768",
    label: "Total Eggs",
  },
  {
    icon: "/assets/species-Icon.svg",
    count: "198",
    label: "Total Species",
  },
  {
    icon: "/assets/nest-Icon.svg",
    count: "842",
    label: "Eggs in Nest",
  },
  {
    icon: "/assets/nursery-Icon.svg",
    count: "2926",
    label: "Eggs in Nursery",
  },
  {
    icon: "/assets/incubators-Icon.svg",
    count: "354",
    label: "Total Incubators",
  },
];

const Dashboard = () => {
  return (
    <>
      <Grid container>
        <Grid item md={4}>
          <Typography className="mb-0 fs-1p3rem">Current Status</Typography>
        </Grid>
        <Grid container item md={8} columnSpacing={1.5}>
          <Grid item md={3.5}>
            <DatePickerComponent label="From date" />
          </Grid>
          <Grid
            item
            md={0.5}
            dispay="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography className="mb-0">to</Typography>
          </Grid>
          <Grid item md={3.5}>
            <DatePickerComponent label="Till date" />
          </Grid>
          <Grid item md={4.5}>
            <InputBoxComponent placeholder="Search" iconName="search" />
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="my-3" gap={3.2}>
        {cards.map((item, index) => (
          <Grid item md={2.2} key={index}>
            <Paper className="p-3 rounded-2 d-flex align-items-center">
              <img src={item.icon} alt="Egg" />
              <Box className="ms-3">
                <Typography className="mb-0 fs-1rem">{item.count}</Typography>
                <Typography className="mb-0 fs-p8rem">{item.label}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper className="rounded-2 p-3 mb-4">
        <Typography className="mb-0 fs-1p3rem fw-500">
          Trasnfer Details
        </Typography>
        <Grid className="my-3" container gap={1}>
          <Grid item md={2.5}>
            <InputBoxComponent placeholder="Search" iconName="search" />
          </Grid>
          <Grid item md={2}>
            <DatePickerComponent label="From date" />
          </Grid>
          <Grid
            item
            md={0.2}
            dispay="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography className="mb-0">to</Typography>
          </Grid>
          <Grid item md={2}>
            <DatePickerComponent label="Till date" />
          </Grid>
          <Grid item md={1.5}>
            <DropDownComponent />
          </Grid>
          <Grid item md={1.5}>
            <DropDownComponent />
          </Grid>
        </Grid>
        <TableComponent />
      </Paper>

      <Paper className="rounded-2 p-3 mb-4">
        <Typography className="mb-0 fs-1p3rem fw-500">Species</Typography>
        <Grid className="my-3" container gap={1}>
          <Grid item md={2.5}>
            <InputBoxComponent placeholder="Search" iconName="search" />
          </Grid>
          <Grid item md={2}>
            <DatePickerComponent label="From date" />
          </Grid>
          <Grid
            item
            md={0.2}
            dispay="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography className="mb-0">to</Typography>
          </Grid>
          <Grid item md={2}>
            <DatePickerComponent label="Till date" />
          </Grid>
          <Grid item md={1.5}>
            <DropDownComponent />
          </Grid>
          <Grid item md={1.5}>
            <DropDownComponent />
          </Grid>
        </Grid>
        <TableComponent />
      </Paper>
    </>
  );
};

export default Dashboard;
