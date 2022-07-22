import * as React from "react";

import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const columns = [
  { id: "exam", label: "Examination", minWidth: 200, align: "center" },
  {
    id: "univ",
    label: "Board/University",
    minWidth: 200,
    align: "center",
  },
  {
    id: "year",
    label: "Year",
    minWidth: 200,
    align: "center",
  },
  {
    id: "cgpa",
    label: "CGPA (Scale of 10)",
    minWidth: 200,
    align: "center",
  },
];

function createData(exam, univ, year, cgpa) {
  return { exam, univ, year, cgpa };
}

const rows = [
  createData("SSC", "GSEB", "2017-18", "8.80"),
  createData("HSC", "GHSEB", "2019-20", "8.29"),
  createData("B.Tech", "DA-IICT", "2020-22", "7.84"),
];

export default function EducationTable() {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", margin: "2em 0" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#008b8b",
          fontWeight: 600,
          textDecoration: "underline",
        }}
        m={1}
      >
        Education Details
      </Typography>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#dcdcdc",
                    fontWeight: 600,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
