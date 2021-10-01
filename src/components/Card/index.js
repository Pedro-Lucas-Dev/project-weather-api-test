import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { GetWeather } from "../../service";
import { Header } from "./components/Header";
import { Week } from "./components/Week";

export const Card = () => {
  const [weatherInformations, setWeatherInformations] = useState({});
  useEffect(() => {
    GetWeather().then(({ data }) => {
      setWeatherInformations(data.results);
    });
  }, []);

  return (
    <Grid>
      <Header informations={weatherInformations} />
      <Week informations={weatherInformations.forecast} />
    </Grid>
  );
};
