import React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CountryCard({countryData}) {
  return (
    <>
      {countryData.map((item) => (
        <Box sx={{ width: 340,border:1,mt:2,ml:2,mr:1,mb:1 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100%"
              width="100%"
              image={item.flags.png}
              alt="country_flag"
            />
            <CardContent align="left">
              <Typography gutterBottom variant="h6">
                <b>{item.name.common}</b>
              </Typography>
              <Typography gutterBottom variant="subtitle1">
                <b>Population:</b> {item.population}
              </Typography>
              <Typography gutterBottom variant="subtitle1">
                <b>Region:</b> {item.region}
              </Typography>
              <Typography gutterBottom variant="subtitle1">
                <b>Capital:</b> {item.capital}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Box>
      ))}
    </>
  );
}
