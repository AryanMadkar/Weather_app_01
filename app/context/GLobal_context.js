"use Client";
import axios from "axios";
import { React, useContext, createContext, useState, useEffect } from "react";
import Defualtcont from "../utils/Defualtcont";
import { debounce } from "lodash";
const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  let [inputvalue, setinputvalue] = useState("");
  const [forecast, setforecas] = useState({});
  const [polution, setpolution] = useState({});
  const [fivedays, setfivedays] = useState({});
  const [uvdata, setuvdata] = useState({});
  const [activecity, setactivecity] = useState([40.7128, -74.006]);
  const [geocoded, setgeocoded] = useState(Defualtcont);

  const fetchgeocodeded = async (search) => {
    try {
      const response = await axios.get(`/api/geocodede?search=${search}`);

      setgeocoded(response.data);
    } catch (error) {
      console.log("Error fetching geocoded", error);
    }
  };

  const fetchuvdata = async (lat, lon) => {
    try {
      const response = await axios.get(`/api2/uvindex?lat=${lat}&lon=${lon}`);
      setuvdata(response.data);
    } catch (error) {
      console.log("error fetching forecast data", error);
    }
  };

  const fetchpolution = async (lat, lon) => {
    try {
      const response = await axios.get(`/api/polution?lat=${lat}&lon=${lon}`);
      setpolution(response.data);
    } catch (error) {
      console.log("error fetching forecast data", error);
    }
  };

  const fetchForecast = async (lat, lon) => {
    try {
      const response = await axios.get(`/api/Weather?lat=${lat}&lon=${lon}`);
      setforecas(response.data);
    } catch (error) {
      console.log("error fetching forecast data", error);
    }
  };

  const fetchfivedays = async (lat, lon) => {
    try {
      const response = await axios.get(`/api2/fiveday?lat=${lat}&lon=${lon}`);
      setfivedays(response.data);
    } catch (error) {
      console.log("error fetching five data", error);
    }
  };

  const handleInput = (e) => {
    setinputvalue(e.target.value);
    if (e.target.value === "") {
      setgeocoded(Defualtcont);
    }
  };

  //debounce featureu
  useEffect(() => {
    const debounceFetch = debounce((search) => {
      fetchgeocodeded(search);
    }, 500);
    debounceFetch(inputvalue);

    if (inputvalue) {
      debounceFetch(inputvalue);
    }
    return () => {
      debounceFetch.cancel();
    };
  }, [inputvalue]);

  useEffect(() => {
    fetchForecast(activecity[0], activecity[1]);
    fetchpolution(activecity[0], activecity[1]);
    fetchfivedays(activecity[0], activecity[1]);
    fetchuvdata(activecity[0], activecity[1]);
    fetchgeocodeded("India");
  }, [activecity]);
  return (
    <GlobalContext.Provider
      value={{
        inputvalue,
        handleInput,
        geocoded,
        forecast,
        polution,
        fivedays,
        uvdata,
        setactivecity,
      }}
    >
      <GlobalContextUpdate.Provider value={{setactivecity}}>{children}</GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
