const api = "12f46f7d5ce934f5271f12830f977231";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchInput = document.querySelector(".search");
const btn = document.querySelector(".searchbuttn");

async function getweather(city) {
    try {
        const response = await fetch(apiurl + `&q=` + city + `&appid=${api}`);
        const data = await response.json();

        // Check if the API response contains the required data
        if (data.cod === 200) {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".upperhumidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".upperwind").innerHTML = data.wind.speed + "Km/h";
        } else {
            console.error("City not found or API error:", data.message);
            document.querySelector(".city").innerHTML = "City not found";
        }
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
    }

    if(data.)
}

// Add the event listener outside the getweather function
btn.addEventListener("click", () => {
    const city = searchInput.value.trim();
    if (city) {
        getweather(city);
        console.log("clicked");
    } else {
        console.log("Please enter a city name");
    }
});
