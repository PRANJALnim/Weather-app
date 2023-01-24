function time(){
    var d = new Date();
    var m = d.getMinutes();
    var h = d.getHours();
    h%=12;
    document.getElementById('time').innerHTML= (h + ":" + m);
}
setInterval(time,1000);

const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
const getWeather = async(city) => {
//     weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    document.getElementById("haze").innerHTML = data.weather[0].main;
    document.getElementById("temp").innerHTML = data.main.temp;
    document.getElementById("url").innerHTML = `
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""
              width="100px">
    `
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();
    }
)
