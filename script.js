const url = new URL("https://api.openweathermap.org/data/2.5/weather")
const params = {
    appid: "4b5774e9f3d2a07b84f0f2f88e486224",
    q: "London"
};
const qs = new URLSearchParams(params);


fetch(`${url}?${qs}`, {
    method: "GET"
})
    .then(response => {
        const json = response.json();
        return json;
    })
    .then(json => {
        const weather = json.weather[0].description;
        console.log(weather);

        const root = document.getElementById("root");
        root.innerHTML = `<p>${weather}</p>`;
    });