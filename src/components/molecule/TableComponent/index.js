import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const column = [
  {
    id: 1,
    label: "NO",
    col: "col1",
    position: "sticky",
    minWidth: 100,
  },
  {
    id: 2,
    label: "SPECIES",
    col: "col2",
  },
  {
    id: 3,
    label: "EGG NUMBER",
    col: "col3",
  },
  {
    id: 4,
    label: "SITE NAME",
    col: "col4",
  },
  {
    id: 4,
    label: "COLLECTED ON",
    col: "col5",
  },
  {
    id: 5,
    label: "BATCH ON",
    col: "col6",
  },
  {
    id: 6,
    label: "COLLECTED BY",
    col: "col7",
  },
  {
    id: 7,
    label: "COLLECTED BY",
    col: "col8",
  },
  {
    id: 8,
    label: "COLLECTED BY",
    col: "col9",
  },
  {
    id: 7,
    label: "COLLECTED BY",
    col: "col10",
  },
  {
    id: 8,
    label: "COLLECTED BY",
    col: "col11",
  },
  {
    id: 7,
    label: "COLLECTED BY",
    col: "col12",
  },
  {
    id: 8,
    label: "COLLECTED BY",
    col: "col13",
  },
  {
    id: 7,
    label: "COLLECTED BY",
    col: "col14",
  },
  {
    id: 8,
    label: "COLLECTED BY",
    col: "col15",
  },
];

const row = [
  {
    col1: "1",
    col2: "Rainbow",
    col3: "0273/24",
    col4: "site name XYZ",
    col5: "10 Apr 2024",
    col6: "2024/0001234/3A",
    col7: "Jordan Stevenson",
    col8: "Jordan Stevenson",
    col9: "Jordan Stevenson",
  },
];

const useStyles = makeStyles({
  stickyCol: {
    position: "sticky",
    zIndex: "5000 !important",
  },
  stickyrow: {
    position: "sticky",
    zIndex: "1000 !important",
  },
  lastCol: {
    position: "sticky",
    zIndex: "1010 !important",
  },
  lastrow: {
    position: "sticky",
    zIndex: "1000 !important",
  },
});

const TableHeadSection = ({ classes = {} }) => {
  let minWidthCount = 0;
  const getStickyClass = (position, index) => {
    if (!position || position === "") return "";
    if (position === "sticky" && index !== column.length - 1)
      return classes.stickyCol;
    if (position === "sticky" && index === column.length - 1)
      return classes.lastCol;
  };

  return (
    <TableHead className="table-head-bg">
      <TableRow>
        {column.map((item, index) => {
          minWidthCount += item.minWidth;
          return (
            <TableCell
              key={index}
              className={getStickyClass(item.position, index)}
              sx={{
                left:
                  item.position === "sticky" && index !== column.length - 1
                    ? `${minWidthCount - item.minWidth}px`
                    : "",
                right:
                  item.position === "sticky" && index === column.length - 1
                    ? 0
                    : "",
                minWidth: item.minWidth,
                maxWidth: item.maxWidth,
              }}
            >
              {item.label}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

const TableComponent = () => {
  const classes = useStyles();
  let minWidthCount = 0;

  const getStickyClass = (position, index) => {
    if (!position || position === "") return "";
    if (position === "sticky" && index !== column.length - 1)
      return classes.stickyrow;
    if (position === "sticky" && index === column.length - 1)
      return classes.lastrow;
  };

  return (
    <Box className="w-100">
      <TableContainer sx={{ position: "relative" }}>
        <Table>
          <TableHeadSection classes={classes} />
          <TableBody>
            {row.map((item, index) => (
              <TableRow className="table-cell-border" key={index}>
                {column.map((ele, ind) => {
                  minWidthCount += ele.minWidth;
                  return (
                    <TableCell
                      key={ind}
                      className={getStickyClass(ele.position, ind)}
                      sx={{
                        left:
                          ele.position === "sticky" && ind !== column.length - 1
                            ? `${minWidthCount - ele.minWidth}px`
                            : "",
                        right:
                          ele.position === "sticky" && ind === column.length - 1
                            ? 0
                            : "",
                      }}
                    >
                      {item[ele.col]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableComponent;
