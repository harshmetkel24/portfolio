import React, { useState } from "react";

import { IconButton } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    console.log(window.innerHeight, scrolled);
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
          sx={{ position: "fixed", right: "2em", bottom: "1em" }}
          onClick={scrollToTop}
        >
          <NavigationIcon sx={{ fontSize: "1.5em" }} />
        </IconButton>
      )}
    </>
  );
};

export default ScrollToTopButton;
