import React from "react";

import { Grid, Box, Typography, Button, Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import LiveTvIcon from "@mui/icons-material/LiveTv";

import { Styles } from "./StylesObjects";
import IconProvider from "./IconProvider";

const useStyles = makeStyles((theme) => ({
  allText: {
    display: "flex",
    alighItems: "center",
    flexWrap: "wrap",
    fontWeight: "500 !important",
    color: "#fff",
    fontFamily: "inherit !important",
    fontSize: "1em !important",
  },
}));

const ProjectsCard = ({ elem }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} md={6} lg={4} key={elem.id}>
        <Box sx={Styles.projectCardBox}>
          <Box sx={Styles.projectCardRow}>
            <Typography variant="body2" className={classes.allText}>
              {elem.name}
            </Typography>
          </Box>
          {elem.description &&
            (elem.description.length >= 50 ? (
              <div data-full={elem.description}>
                {`${String(elem.description).substr(0, 50)}...`}
              </div>
            ) : (
              <div className="normal">{elem.description}</div>
            ))}
          {elem.language && (
            <Box sx={Styles.projectCardRow}>
              <Typography
                variant="body2"
                sx={{ width: "25%" }}
                className={classes.allText}
              >
                Language:
              </Typography>

              <Typography variant="body2" className={classes.allText}>
                <IconProvider language={elem.language} />
              </Typography>
            </Box>
          )}
          {elem.topics.length > 0 && (
            <Box sx={Styles.projectCardRow}>
              <Typography
                variant="body2"
                sx={{ width: "25%" }}
                className={classes.allText}
              >
                Topics
              </Typography>
              <Typography variant="body2" className={classes.allText}>
                {elem.topics.map((topic) => (
                  <Chip
                    sx={{ fontSize: "0.8em", margin: "2px 4px" }}
                    label={topic}
                    size="small"
                  />
                ))}
              </Typography>
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              my: 1,
              justifyContent: "space-between ",
            }}
          >
            <Button
              component="a"
              href={elem.html_url}
              target="_blank"
              variant="contained"
              size="small"
              sx={{
                textTransform: "capitalize",
              }}
              startIcon={<GitHubIcon />}
            >
              Github
            </Button>
            {elem.homepage && (
              <Button
                href={
                  String(elem.homepage).substr(0, 5) === "https"
                    ? elem.homepage
                    : "https://" + elem.homepage
                }
                target="_blank"
                variant="contained"
                size="small"
                sx={{
                  textTransform: "capitalize",
                }}
                startIcon={<LiveTvIcon />}
              >
                Live Project
              </Button>
            )}
            {elem.has_pages && (
              <Button
                href={`https://harshmetkel24.github.io/${elem.name}/index.html`}
                target="_blank"
                variant="contained"
                size="small"
                sx={{
                  textTransform: "capitalize",
                }}
                startIcon={<LiveTvIcon />}
              >
                Live Project
              </Button>
            )}
            {console.log(elem.homepage)}
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default ProjectsCard;
