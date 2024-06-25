import { useState, useEffect } from "react";
const WeatherDetails = (props) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Use effect with no array");
  });
  useEffect(() => {
    console.log("Use effect with empty array");
  }, []);
  useEffect(() => {
    console.log("Use effect with dependency");
  }, [counter]);
  //   all the use effects are for extra lesson from david

  return (
    <section>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
      <span>counter: {counter}</span>
      <h2>Weather Details</h2>
      <p>Locations: {props.weather.location}</p>
      <p>Temperature: {props.weather.temperature}</p>
      <p>Condition: {props.weather.condition}</p>
    </section>
  );
};

export default WeatherDetails;
