async function start() {
  const weatherPromise = await fetch(
    "https://api.weather.gov/gridpoints/MFL/105,52/forecast"
  );
  const weatherData = await weatherPromise.json();
  const ourTempereture = weatherData.properties.periods[0].temperature;

  document.querySelector("#tempereture-output").textContent = ourTempereture;
}

start();
