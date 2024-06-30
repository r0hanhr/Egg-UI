/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import TableComponent from "../../components/molecule/TableComponent";
import { ReceivedTableColumn, RecievedTableRow } from "../../constants/Eggs";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ReceivedEggs = () => {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempRow = [...RecievedTableRow];
    const array = [];
    tempRow.map(item => {
      array.push({
        col1: item.no,
        col2: (
          <Box className="d-flex align-items-center">
            <img src="/assets/species.svg" alt="" />
            <Typography className="mb-0 ms-2">{item.species}</Typography>
          </Box>
        ),
        col3: item.eggnumber,
        col4: item.sitename,
        col5: item.collectedon,
        col6: item.batchno,
        col7: (
          <Box className="d-flex align-items-center">
            <img src="/assets/Avatar.svg" alt="" />
            <Typography className="mb-0 ms-2">{item.collectedby}</Typography>
          </Box>
        ),
      });
    });
    setRows([...array]);
  }, []);

  return (
    <TableComponent
      rows={[...rows]}
      columns={[...ReceivedTableColumn]}
      onRowClick={() => {
        navigate("/eggs/eggdetails");
      }}
    />
  );
};

export default ReceivedEggs;
