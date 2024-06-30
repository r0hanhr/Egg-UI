import {
  Box,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

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

const TableHeadSection = ({ classes = {}, column = [] }) => {
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

const TableComponent = ({ rows = [], columns = [], onRowClick = () => {} }) => {
  const [row, setRow] = useState([]);
  const [column, setColumn] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const rowsPerPage = 10;

  const classes = useStyles();
  let minWidthCount = 0;

  useEffect(() => {
    const count = Math.ceil(rows.length / rowsPerPage);
    setPageCount(count);
    setRow(rows);
    setColumn(columns);
  }, [rows, columns]);

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
          <TableHeadSection classes={classes} column={column} />
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => (
                <TableRow
                  onClick={onRowClick}
                  className="table-cell-border"
                  key={index}
                >
                  {column.map((ele, ind) => {
                    minWidthCount += ele.minWidth;
                    return (
                      <TableCell
                        key={ind}
                        className={`${getStickyClass(
                          ele.position,
                          ind
                        )} fw-400`}
                        sx={{
                          left:
                            ele.position === "sticky" &&
                            ind !== column.length - 1
                              ? `${minWidthCount - ele.minWidth}px`
                              : "",
                          right:
                            ele.position === "sticky" &&
                            ind === column.length - 1
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
      {row.length > 0 ? (
        <Box className="d-flex justify-content-end my-3">
          <Pagination
            count={pageCount}
            shape="rounded"
            onChange={(e, newPage) => setPage(newPage - 1)}
            sx={{
              "& .Mui-selected": {
                backgroundColor: "#839D8D !important",
                color: "#ffffff",
              },
            }}
          />
        </Box>
      ) : null}
    </Box>
  );
};

export default TableComponent;
