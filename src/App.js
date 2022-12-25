import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";

import CountryCard from "./components/CountryCard";

function App() {
  const baseURL = "https://restcountries.com/v3.1/all";

  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const resp = await axios.get(baseURL);
      setCountryData(resp?.data);
    };
    fetchCountries();
  }, []);

  return (
    <div className="App">
      <Typography variant="h3" sx={{ textAlign: "center", mt: 5 }} gutterBottom>
        Country Info
      </Typography>
      {countryData.length <= 0 && (
        <Typography sx={{ textAlign: "center" }}>
          No Countries found!
        </Typography>
      )}
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
