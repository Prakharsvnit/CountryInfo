import "./App.css";
import React, { useState, useEffect } from "react";
import CountryCard from "./components/CountryCard";
import Box from "@mui/material/Box";
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
      <Box sx={{ flexDirection: "row", display: "flex", flexWrap: "wrap",justifyContent: "center",mt:15}}>
        <CountryCard countryData={countryData} />
      </Box>
    </div>
  );
}

export default App;
