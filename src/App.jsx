import { useState } from "react";
import "./App.css";
import * as weatherService from './services/weatherService'
// This syntax imports everything/all (*) exported from the weatherService.js module and groups them inside a weatherService object alias. Whenever we require a specific service function, we can access it through dot notation on the weatherService object.


function App() {
  const fetchData = async () =>{
    const data = await weatherService.show('New York')
    console.log('Data: ', data);
  }

  return (
    <>
      <h1>Weather API</h1>
      <button onClick={fetchData}>Fetch Weather Data</button>
      {/* Here, we are calling upon fetchData with an onClick event handler, and logging the data returned from ` weatherService.show(‘New York’)` to the console. */}
    </>
  );
}

export default App;
