import React, { useState } from "react";

import { IconButton } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);
  return (
    <>
      {visible && (
        <IconButton
          sx={{
            display: {
              md: "block",
              xs: "none",
            },
            position: "fixed",
            right: "2em",
            bottom: "1em",
            zIndex: 2,
          }}
          onClick={scrollToTop}
        >
          <NavigationIcon sx={{ fontSize: "1.5em" }} />
        </IconButton>
      )}
    </>
  );
};

export default ScrollToTopButton;
