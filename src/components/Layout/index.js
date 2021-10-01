import React from "react";
import { Box, Grid } from "@mui/material";
import { Card } from "../Card";
export const Layout = () => {
  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center">
        <Card />
      </Grid>
    </Box>
  );
};
