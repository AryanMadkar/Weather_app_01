"use Client";
import axios from "axios";
import { React, useContext, createContext, useState, useEffect } from "react";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setforecas] = useState({});
  const [polution, setpolution] = useState({});
  const [fivedays, setfivedays] = useState({});
  const [uvdata, setuvdata] = useState({});
  const [population, setpopulation] = useState({});


  const fetchpopulation = async () => {
    try {
      const response = await axios.get("/api2/population");
      setpopulation(response.data);
      
    } catch (error) {
      console.log("error fetching forecast data", error);
    }
  };

  const fetchuvdata = async () => {
    try {
      const response = await axios.get("/api2/uvindex");
      setuvdata(response.data);
      
    } catch (error) {
      console.log("error fetching forecast data", error);
    }
  };

  const fetchpolution = async () => {
    try {
      const response = await axios.get("/api/polution");
      setpolution(response.data);
    } catch (error) {
      console.log("error fetching forecast data", error);
    }
  };

  const fetchForecast = async () => {
    try {
      const response = await axios.get("/api/Weather");
      setforecas(response.data);
    } catch (error) {
      console.log("error fetching forecast data", error);
    }
  };

  const fetchfivedays = async () => {
    try {
      const response = await axios.get("/api2/fiveday");
      setfivedays(response.data);
      
    } catch (error) {
      console.log("error fetching five data", error);
    }
  };


  useEffect(() => {
    fetchForecast();
    fetchpolution();
    fetchfivedays();
    fetchuvdata();
  }, []);
  return (
    <GlobalContext.Provider value={{ forecast, polution, fivedays,uvdata }}>
      <GlobalContextUpdate.Provider>{children}</GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
