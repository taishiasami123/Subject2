const url = new URL("https://api.openweathermap.org/data/2.5/weather")
const params = {
    appid: "89d0efa5995aed5301b02f38f8736abb",
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