import React, { useState, useContext, useEffect } from "react";

import { Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import { DataContext } from "../Pages/Projects";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function LanguageFilters() {
  const { data, setData, allProjectsData } = useContext(DataContext);
  const languages = ["JavaScript", "C++", "C", "Handlebars", "HTML", "EJS"];
  const [languageSet, setLanguageSet] = useState(languages);
  useEffect(() => {
    // if there is matching data present then show that only or show entire data
    setData(
      languageSet.length
        ? data.filter((elem) => {
            return languageSet.indexOf(elem.language) >= 0;
          })
        : allProjectsData
    );
  }, [languageSet]);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          boxSizing: "inherit",
          p: 2,
          display: "flex",
          justifyContent: {
            md: "flex-end",
            xs: "center",
          },
        }}
      >
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={languages}
          disableCloseOnSelect
          autoComplete
          // here every time any change happens we are updating our languageSet
          onChange={(event, value) => setLanguageSet(value)}
          getOptionLabel={(option) => option}
          renderOption={(props, option, { selected }) => (
            <li {...props} sx={{ width: 100 }}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option}
            </li>
          )}
          renderInput={(params) => (
            <TextField
              sx={{
                width: {
                  xs: 250,
                  sm: 350,
                  md: 400,
                  lg: 500,
                },
              }}
              {...params}
              label="Languages"
              placeholder="Filter languages"
            />
          )}
        />
      </Box>
    </>
  );
}
