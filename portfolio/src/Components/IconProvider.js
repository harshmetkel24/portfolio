import React from "react";

import { Typography, Chip } from "@mui/material";

import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";

const IconProvider = ({ language }) => {
  if (language === "C") {
    return (
      <Chip
        sx={{ fontSize: "0.8em" }}
        size="small"
        label={language}
        icon={<img src="/images/CIcon.svg" />}
      />
    );
  } else if (language === "C++") {
    return (
      <Chip
        sx={{ fontSize: "0.8em" }}
        size="small"
        label={language}
        icon={<img src="/images/C++Icon.svg" />}
      />
    );
  } else if (language === "JavaScript") {
    return (
      <Chip
        sx={{ fontSize: "0.8em" }}
        size="small"
        label={language}
        icon={
          <JavascriptIcon
            sx={{
              fontSize: "3em !important",
              color: "#48d1cc!important",
            }}
          />
        }
      />
    );
  } else if (language === "EJS") {
    return (
      <Chip
        sx={{ fontSize: "0.8em" }}
        size="small"
        label={language}
        icon={<img style={{ height: "24px" }} src="/images/EJSIcon.svg" />}
      />
    );
  } else if (language === "Handlebars") {
    return (
      <Chip
        sx={{ fontSize: "0.8em" }}
        size="small"
        label={language}
        icon={<img src="/images/HandlebarsIcon.png" />}
      />
    );
  } else if (language === "HTML") {
    return (
      <Chip
        sx={{ fontSize: "0.8em" }}
        size="small"
        label={language}
        icon={
          <HtmlIcon
            sx={{ fontSize: "3em !important", color: "#48d1cc!important" }}
          />
        }
      />
    );
  } else if (language === "CSS") {
    return (
      <Chip
        sx={{ fontSize: "0.8em" }}
        size="small"
        label={language}
        icon={
          <CssIcon
            sx={{ fontSize: "3em !important", color: "#48d1cc!important" }}
          />
        }
      />
    );
  } else {
    return <Chip sx={{ fontSize: "0.8em" }} size="small" label={language} />;
  }
};

export default IconProvider;
