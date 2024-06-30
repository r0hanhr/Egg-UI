import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonComponent from "../../components/atom/ButtonComponent";
import SideModalComponen from "../../components/molecule/SideModalComponent";

const EggDetails = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Paper className="my-3 p-3">
        <Grid container alignItems="center">
          <Grid item md={3}>
            <img src="/assets/Image.png" alt="" />
          </Grid>
          <Grid item md={9} className="h-100">
            <Box className="d-flex align-items-center justify-content-between">
              <Typography className="fs-1p3rem mb-0">0273/24</Typography>
              <Box className="d-flex align-items-center">
                <Box className="d-flex align-items-center me-4">
                  <img src="/assets/Avatar.svg" alt="" />
                  <Typography className="mb-0 ms-2 fs-p9rem">
                    Jordan Stevenson
                  </Typography>
                </Box>
                <Box className="d-flex align-items">
                  <ButtonComponent
                    className="me-2 py-2"
                    label="Discard"
                    variant="outlined"
                  />
                  <ButtonComponent
                    className="py-2 px-4"
                    label="Allocate"
                    onClick={() => setOpen(true)}
                  />
                </Box>
              </Box>
            </Box>

            <Grid container gap={2}>
              <Grid
                item
                md={3.5}
                className="p-3 rounded-2 d-flex align-items-center"
              >
                <Box
                  sx={{ backgroundColor: "#1F515B" }}
                  className="rounded-2 p-2"
                >
                  <Typography className="color-white text-center">1</Typography>
                  <Typography className="color-white">Days</Typography>
                </Box>
                <Box className="ms-3">
                  <Typography className="mb-0 fs-1rem">1 Apr 2024</Typography>
                  <Typography className="mb-0 fs-p8rem">Found date</Typography>
                </Box>
              </Grid>
              <Grid
                item
                md={3.5}
                className="p-3 rounded-2 d-flex align-items-center"
              >
                <img src="/assets/eggs-details.svg" alt="" />
                <Box className="ms-3">
                  <Typography className="mb-0 fs-1rem">Not Added</Typography>
                  <Typography className="mb-0 fs-p8rem color-light-green">
                    Current weight
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                md={3.5}
                className="p-3 rounded-2 d-flex align-items-center"
              >
                <img src="/assets/eggs-1.svg" alt="" />
                <Box className="ms-3">
                  <Typography className="mb-0 fs-1rem">Intact</Typography>
                  <Typography className="mb-0 fs-p8rem color-light-green">
                    Warm condition
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <SideModalComponen
        open={open}
        title="Send for Incubation"
        onClose={() => setOpen(false)}
      >
        <Box className="d-flex align-items-center justify-content-center">
          <Typography>CONTENT GOES HERE</Typography>
        </Box>
      </SideModalComponen>
    </>
  );
};

export default EggDetails;
