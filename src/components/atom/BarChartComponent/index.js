/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box, Grid, Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartComponent = ({ chartData = [], height = "250px" }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const tempData = {
      labels: [],
      datasets: [
        {
          label: "Values",
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 1,
          barThickness: 20,
        },
      ],
    };

    chartData.map(item => {
      tempData.labels.push(item.label);
      tempData.datasets[0].data.push(item.data);
      tempData.datasets[0].backgroundColor.push(item.color);
      tempData.datasets[0].borderColor.push(item.color);
    });

    setData(tempData);
  }, [chartData]);

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        display: true,
        ticks: {
          display: true,
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      bar: {
        borderRadius: 10,
      },
    },
    layout: {
      padding: {
        top: 30,
        bottom: 30,
      },
    },
  };

  return (
    <>
      {data && data?.datasets?.length > 0 && data?.labels?.length > 0 ? (
        <Grid container>
          <Grid item md={8} style={{ height }}>
            <Bar data={data} options={options} />
          </Grid>
          <Grid container item md={4}>
            {chartData.map((item, index) => (
              <Grid key={index} item md={6}>
                <Box className="d-flex align-items-center">
                  <Box
                    sx={{
                      height: "15px",
                      width: "15px",
                      borderRadius: "50%",
                      backgroundColor: `${item.color}`,
                    }}
                  ></Box>
                  <Typography className="mb-0 ms-2 fs-p8rem">
                    {item.label}
                  </Typography>
                </Box>
                <Typography
                  className="mb-0 fs-1rem"
                  sx={{ color: `${item.color}` }}
                >
                  {item.data}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};

export default BarChartComponent;
