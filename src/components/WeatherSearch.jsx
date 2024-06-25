import { useState } from 'react';

const WeatherSearch = (props) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // We'll call the fetch function here
    props.fetchData(city); // Don't forget to pass city state!
    setCity('');
  };

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        // {/* onChange is a function to save a step and not to create a variable */}

        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default WeatherSearch;