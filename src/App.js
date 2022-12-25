// you dont need import React if you wont use. React 18 made it optional
// Always make third-parties libraries as top level, like axios, Mui
import { useState, useEffect } from "react";
import axios from "axios";
// yoou are using MUI, then import all components from @mui/material
import { Box, Typography } from "@mui/material";

import CountryCard from "./components/CountryCard";

function App() {
  const baseURL = "https://restcountries.com/v3.1/all";

  const [countryData, setCountryData] = useState(null);

  const fetchCountries = () =>
    axios.get(baseURL).then((response) => {
      setCountryData(response.data);
    });

  /* Always avoid fetching inside useEffect. It's a good practice */
  /* useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setCountryData(response.data);
    });
  }, []); */

  useEffect(() => {
    fetchCountries();
  }, []);

  /* If there's no data, return JSX  */

  return (
    <div className="App">
      <Typography variant="h3" sx={{ textAlign: "center", mt: 5 }} gutterBottom>
        Country Info
      </Typography>
      {/* Arrays you always compare the length.  */}
      {countryData.length <= 0 && (
        <Typography sx={{ textAlign: "center" }}>
          No Countries found!
        </Typography>
      )}
      {/* Avoid style inline */}
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <CountryCard countryData={countryData} />
      </Box>
    </div>
  );
}

export default App;
