import {
  Box,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

export default function CountryCard({ countryData }) {
  return (
    <>
      {countryData.map((item) => (
        /* When we mapping list, React needs a key for reference. In this case we dont have id,
          and it's not a good practice take the index from the map. So we are passing the name of country as key.
        */

        /* 
          About this style inline, you can use just margin.
           margin: TOP: 16px = 1rem || RIGHT: 8px = 0.5rem || BOTTOM: 8px = 0.5rem || LEFT: 16px = 1rem
           as default broswer uses 16px 
         */
        <Box
          sx={{ width: 340, border: 1, margin: "1rem 0.5rem 0.5rem 1rem" }}
          key={item.area}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
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
