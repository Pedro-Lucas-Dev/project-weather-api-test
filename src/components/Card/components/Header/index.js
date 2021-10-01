import React from "react";
import { Grid, Typography } from "@mui/material";

export const Header = ({ informations }) => {
  return (
    <Grid>
      <Typography variant={"h4"}>
        {informations.city_name} - {informations.city}
      </Typography>
      <img
        src={`http://assets.api.hgbrasil.com/weather/images/${informations.img_id}.png`}
      />
      <Typography variant={"body2"}>
        {informations.description}, {informations.time}
      </Typography>
      <Typography variant={"body2"}>
        Umidade: {informations.humidity}%
      </Typography>
      <Typography variant={"body2"}>
        Vento: {informations.wind_speedy}
      </Typography>
    </Grid>
  );
};
