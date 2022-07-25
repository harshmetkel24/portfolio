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

import SchoolIcon from "@mui/icons-material/School";

const columns = [
  { id: "exam", label: "Examination", align: "center" },
  {
    id: "univ",
    label: "Board/University",
    align: "center",
  },
  {
    id: "year",
    label: "Year",
    align: "center",
  },
  {
    id: "cgpa",
    label: "CGPA (Scale of 10)",
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
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        my: 2,
        backgroundColor: "#1b1b1b",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          py: 1,
          textAlign: "center",
          color: "whitesmoke",
          fontFamily: "inherit",
          fontWeight: 700,
          fontSize: { md: "2em", xs: "1.5em" },
        }}
      >
        <SchoolIcon sx={{ mx: 1, color: "#48d1cc" }} />
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
                    backgroundColor: "#333",
                    fontFamily: "inherit",
                    color: "whitesmoke",
                    fontSize: 20,
                    fontWeight: 700,
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
                      <TableCell
                        sx={{
                          fontFamily: "inherit",
                          color: "whitesmoke",
                          fontSize: 15,
                          fontWeight: 700,
                        }}
                        key={column.id}
                        align={column.align}
                      >
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
