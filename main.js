let weather = {
  apiKey: "7f3021b1bb858820049c204747d0e756",
  getResult: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayData(data));
      
    },
    
  displayData: function (jasonData) {
    const { name } = jasonData;
    const { temp, humidity } = jasonData.main;
    const { country } = jasonData.sys;
    

    document.getElementById("city").innerText = "weather in " + name;
    document.getElementById("showTemp").innerText = Math.floor(temp) + "°C";
    document.getElementById("humidity").innerText =
      "Humidity: " + humidity + " %";
      document.getElementById("country").innerText = "country: " + country
  },
  // the getResult Parameter is the value of the SearchBox
  search: function () {
    this.getResult(searchBox.value);
  },
};
let searchBox = document.getElementById("searchBox");
let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", function () {
  weather.search();
  searchBox.value = ""
});
 
console.log(weather)
weather.getResult("neumünster")