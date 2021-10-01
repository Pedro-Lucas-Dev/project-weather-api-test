import React from "react";
import { Day } from "../Day";
import { Grid } from "@mui/material";

export const Week = ({ informations }) => {
  if (!informations) return null;
  const RenderItems = () => {
    return informations.map((information) => {
      return <Day informations={information} key={information.date} />;
    });
  };
  return (
    <Grid container direction="row">
      <RenderItems />
    </Grid>
  );
};
