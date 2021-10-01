import { Grid, Typography, Box } from "@mui/material";
import React from "react";

export const Day = ({ informations }) => {
  return (
    <Box p={2}>
      <Grid>
        <Typography>{informations.weekday}</Typography>
        <Typography>{informations.description}</Typography>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <Typography>{informations.min}°</Typography>
          </Grid>
          <Grid item>
            <Typography>{informations.max}°</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
