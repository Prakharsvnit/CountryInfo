import React, { useState, useEffect } from "react";
import CountryCard from "./components/CountryCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";

const baseURL = "https://restcountries.com/v3.1/all";

function App() {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountryData(response.data);
    });
  }, []);

  if (!countryData) return null;

  return (
    <div className="App">
    <Typography variant="h3" sx={{textAlign: 'center',mt:5}} gutterBottom>Country Info</Typography>
      <Box sx={{ flexDirection: "row", display: "flex", flexWrap: "wrap",justifyContent: "center",mt:5}}>
        <CountryCard countryData={countryData} />
      </Box>
    </div>
  );
}

export default App;
