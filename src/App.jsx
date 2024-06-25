import { useState, useEffect } from "react";
import "./App.css";
import * as weatherService from "./services/weatherService";
// This syntax imports everything/all (*) exported from the weatherService.js module and groups them inside a weatherService object alias. Whenever we require a specific service function, we can access it through dot notation on the weatherService object.
import WeatherSearch from "./components/WeatherSearch";
import WeatherDetails from "./components/WeatherDetails";

function App() {

  const [weather, setWeather] = useState({});

  useEffect(() =>{
    // Define a fetch function:
    const fetchDefaultData = async () =>{
      const data = await weatherService.show('New York');
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
      };
      setWeather(newWeatherState)
    };
    // Call the fetch function when the page loads:
    fetchDefaultData();
  }, [])

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
      // this matches JSON response body from weather api
    };
    setWeather(newWeatherState);
  };
  // The following log should be outside of the fetchData function
  console.log('State:', weather);


  return (
    <>
      <h1>Weather API</h1>
      {/* <button onClick={fetchData}>Fetch Weather Data</button>
      Here, we are calling upon fetchData with an onClick event handler, and logging the data returned from ` weatherService.show(‘New York’)` to the console. */}
      {/* removed previous button and added below button after making WeatherSearch Component */}
      {/* Pass fetchData down to <WeatherSearch /> as a prop: */}
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </>
  );
}

export default App;
