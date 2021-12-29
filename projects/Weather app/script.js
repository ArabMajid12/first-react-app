const btn = document.querySelector("button");
const city = document.getElementById("city");
const wind = document.getElementById("wind-value");

btn.addEventListener("click", async () => {
  const input = document.querySelector("input").value;
  const temp = document.getElementById("temp-value");
  const loca = document.getElementById("city");

  loca.textContent = input;
  const res =
    await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2be256d383554ca791972940211607&q=${input}&days=1.&aqi=no&alerts=no
  `);

  const data = await res.json();
  console.log(data);

  const iconEl = document.getElementById("icon");
  const img = document.createElement("img");

  iconEl.innerHTML = "";

  img.src = data.current.condition.icon;
  iconEl.appendChild(img);
  console.log(data.current.temp_c);

  const temperature = document.getElementById("temp-value");
  temperature.textContent = data.current.temp_c;
  console.log(data.current.condition.temp_c);

  const windValue = document.getElementById("wind-value");
  windValue.textContent = data.current.wind_degree;
  console.log(data.current.wind_degree);

  const preciValue = document.getElementById("preci-value");
  preciValue.textContent = data.current.precip_in;
  console.log(data.current.precip_in);
});

// icon: "//cdn.weatherapi.com/weather/64x64/day/116.png"
