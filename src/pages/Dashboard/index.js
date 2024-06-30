/* eslint-disable array-callback-return */
import { Grid, Typography, Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import DatePickerComponent from "../../components/atom/DatePickerComponent";
import InputBoxComponent from "../../components/atom/InputBoxComponent";
import DropDownComponent from "../../components/atom/DropDownComponent";
import TableComponent from "../../components/molecule/TableComponent";
import BarChartComponent from "../../components/atom/BarChartComponent";
import {
  SpeciesTableColumn,
  SpeciesTableRow,
  TransferTableColumn,
  TransferTableRow,
} from "../../constants/Dashboard";

const cards = [
  {
    icon: "/assets/egg-Icon.svg",
    count: "3768",
    label: "Total Eggs",
    countColor: "color-orange",
  },
  {
    icon: "/assets/species-Icon.svg",
    count: "198",
    label: "Total Species",
    countColor: "color-light-blue",
  },
  {
    icon: "/assets/nest-Icon.svg",
    count: "842",
    label: "Eggs in Nest",
    countColor: "color-green",
  },
  {
    icon: "/assets/nursery-Icon.svg",
    count: "2926",
    label: "Eggs in Nursery",
    countColor: "color-dark-green",
  },
  {
    icon: "/assets/incubators-Icon.svg",
    count: "354",
    label: "Total Incubators",
    countColor: "color-dark-green",
  },
];

const chartData = [
  {
    label: "In Nest",
    color: "#00AFD6B2",
    data: "48",
  },
  {
    label: "In Nursery",
    color: "#37BD69B2",
    data: "99",
  },
  {
    label: "Good condition",
    color: "#00D6C9",
    data: "82",
  },
  {
    label: "Discarded",
    color: "#FA614099",
    data: "33",
  },
];

const Dashboard = () => {
  const [transferRows, setTransferRows] = useState([]);
  const [speciesRows, setSpeciesRows] = useState([]);

  useEffect(() => {
    const tempTransferRow = [...TransferTableRow];
    const transferarray = [];
    tempTransferRow.map(item => {
      transferarray.push({
        col1: item.no,
        col2: (
          <>
            <Typography className="mb-0">{item.eggnumber}</Typography>
            <Typography className="mb-0 fs-8prem color-green">
              Fertile
            </Typography>
          </>
        ),
        col3: (
          <Typography
            className={`mb-0 ${
              item.status === "Completed"
                ? "color-green"
                : item.status === "Cancelled"
                ? "color-orange"
                : "color-light-blue"
            }`}
          >
            {item.status}
          </Typography>
        ),
        col4: (
          <Box className="d-flex align-items-center">
            <img src="/assets/species.svg" alt="" />
            <Typography className="mb-0 ms-2">{item.species}</Typography>
          </Box>
        ),
        col5: item.from,
        col6: item.date,
        col7: item.at,
        col8: item.nursery,
      });
    });

    setTransferRows([...transferarray]);

    const tempSpeciesRow = [...SpeciesTableRow];
    const speciesarray = [];
    tempSpeciesRow.map(item => {
      speciesarray.push({
        col1: item.no,
        col2: (
          <Box className="d-flex align-items-center">
            <img src="/assets/species.svg" alt="" />
            <Typography className="mb-0 ms-2">{item.species}</Typography>
          </Box>
        ),
        col3: item.totaleggs,
        col4: item.innest,
        col5: (
          <Typography className="mb-0 color-light-blue">
            {item.innursery}
          </Typography>
        ),
        col6: (
          <Typography className="mb-0 color-green">
            {item.goodcondition}
          </Typography>
        ),
        col7: (
          <Typography className="mb-0 color-orange">
            {item.discarded}
          </Typography>
        ),
        col8: item.tilldate,
      });
    });

    setSpeciesRows([...speciesarray]);
  }, []);

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
                <Typography className={`mb-0 fs-1rem ${item.countColor}`}>
                  {item.count}
                </Typography>
                <Typography className="mb-0 fs-p8rem">{item.label}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper className="p-3 w-75 my-3 rounded-2">
        <Typography className="fs-1p3rem">
          Total Collection - <span className="color-green">262 Eggs</span>
        </Typography>
        <BarChartComponent chartData={chartData} />
      </Paper>

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
            <DropDownComponent placeholder="From Site" />
          </Grid>
          <Grid item md={1.5}>
            <DropDownComponent placeholder="Receiving Site" />
          </Grid>
        </Grid>
        <TableComponent
          columns={[...TransferTableColumn]}
          rows={[...transferRows]}
        />
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
            <DropDownComponent placeholder="From Site" />
          </Grid>
          <Grid item md={1.5}>
            <DropDownComponent placeholder="Receiving Site" />
          </Grid>
        </Grid>
        <TableComponent
          columns={[...SpeciesTableColumn]}
          rows={[...speciesRows]}
        />
      </Paper>
    </>
  );
};

export default Dashboard;
