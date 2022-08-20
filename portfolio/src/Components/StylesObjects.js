const Styles = {
  projectCardBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: {
      sm: 175,
      xs: "fit-content",
    },
    m: 2,
    backgroundColor: "#004242",
    p: 2,
    borderRadius: 2,
    transition: ".5s ease-in-out",
    "&:hover": {
      boxShadow: "inset 0px 2px 8px 1px #007fff",
      transform: "scale(1.05)",
      backgroundColor: "#002147",
    },
    gap: {
      sm: "0",
      xs: "0.5em",
    },
  },
  profileCardDetail: {
    fontWeight: 700,
    fontSize: {
      md: "1.3em",
      xs: "1.1em",
    },
    color: "#c0c0c0",
    fontFamily: "inherit",
    textTransform: "capitalize",
  },
  profileCardBox: {
    mb: 1,
    width: {
      md: "30%",
      xs: "100%",
    },
    background: "#343434",
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderTopRightRadius: {
      md: 0,
      xs: 4,
    },
    borderBottomRightRadius: {
      md: 0,
      xs: 4,
    },
    height: {
      md: "320px",
      xs: "fit-content",
    },
  },
  projectCardRow: {
    display: "flex",
    flexGrow: 1,
    fontSize: "0.9em",
    alignItems: "center",
  },
  headingIcon: { fontSize: "1.5em", mx: 1, color: "#48d1cc" },
  headingText: {
    fontFamily: "inherit",
    fontWeight: 600,
    display: "flex",
    alighItems: "center",
    fontSize: "1.5em",
  },
  rowText: {
    mx: 1,
    color: "#c0c0c0",
    fontFamily: "inherit",
  },
  boxStyles: {
    width: {
      sm: "50%",
      xs: "inherit",
    },
    backgroundColor: "#343434",
    borderRadius: 1,
    m: 3,
    p: 1,
  },
};

export { Styles };
