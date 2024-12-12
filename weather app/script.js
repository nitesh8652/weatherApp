const api = "12f46f7d5ce934f5271f12830f977231";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchInput = document.querySelector(".search");
const btn = document.querySelector(".searchbuttn");
const icon = document.querySelector(".icon");
const temperature = document.querySelector(".temp")
const credetinials = document.querySelector(".weee")
async function getweather(city) {
    try {
        const response = await fetch(apiurl + `&q=` + city + `&appid=${api}`);
        const data = await response.json();

        if (data.cod === 200) {
            // Update weather details
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".upperhumidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".upperwind").innerHTML = data.wind.speed + "Km/h";

            // Update weather icon based on the condition
            const weatherCondition = data.weather[0].main;
            if (weatherCondition === "Clouds") {
                icon.src = "images/clouds.png";
            } else if (weatherCondition === "Rain") {
                icon.src = "images/rain.png";
            } else if (weatherCondition === "Snow") {
                icon.src = "images/snow.png";
            } else if (weatherCondition === "Clear") {
                icon.src = "images/clear.png";
            } else if (weatherCondition === "Drizzle") {
                icon.src = "images/drizzle.png";
            } else if (weatherCondition === "Mist") {
                icon.src = "images/mist.png";
            }
        } else {
            console.error("City not found or API error:", data.message);
            document.querySelector(".city").innerHTML = "City not found";
            temperature.style.display="none"
            credetinials.style.display="none"
            icon.src="images/demo.webp"
        }
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
    }
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
