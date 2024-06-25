const API_KEY = "3a86b6189ca74af2adf132756242506";
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;
// this is just for learning, otherwise never expose your api keys

const show = async (city) => {
  try {
    const queryString = `&q=${city}`;
    const res = await fetch(BASE_URL + queryString);
    console.log("response: ", res);
    const data = await res.json();
    console.log("Data: ", data);
    return data;
  } catch (err) {
    console.log(err);
    console.log(
      "There was an issue with the api request to weatherapi from the show function"
    );
  }
  //   In the code block above, we are constructing a request URL, sending the request, and then parsing the response as JSON. Both fetch() and the .json() method are asynchronous, so we include the await keyword to pause the execution of the code. Notice how we define the queryString variable on its own line, and then add it to the end of the BASE_URL. This just makes our code a bit more legible.

  // 💡 The .json() method converts the JSON formatted string from the response into a JavaScript object.
};

// show('New York');
// in terminal type: node src/services/weatherService.js and this will return the weather information for New York to test

export { show };
