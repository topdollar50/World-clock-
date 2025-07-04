      //Montreal
       function updateMontreal(){
       let montrealElement = document.querySelector("#montreal");
       let montrealDateElement = montrealElement.querySelector(".date");
       let montrealTimeElement = montrealElement.querySelector(".time");
       
       let montrealTime = moment().tz("America/Montreal");
       montrealDateElement.innerHTML = montrealTime.format("MMMM Do, YYYY");
       
       montrealTimeElement.innerHTML= montrealTime.format("h:mm:ss [<strong>]A[</strong>]");
       }
       updateMontreal();
       setInterval(updateMontreal, 1000);
       
       //Casablanca
       
       function updateCasablanca(){
       let casablancaElement = document.querySelector("#casablanca");
       let casablancaDateElement = casablancaElement.querySelector(".date");
       let casablancaTimeElement = casablancaElement.querySelector(".time");
       
       let casablancaTime = moment().tz("Africa/Casablanca");
       casablancaDateElement.innerHTML = casablancaTime.format("MMMM Do, YYYY");
       
       casablancaTimeElement.innerHTML= casablancaTime.format("h:mm:ss [<strong>]A[</strong>]");
       }

       function updateCity(event) {
       let cityTimeZone = event.target.value;
             if(cityTimeZone === "current"){
                   cityTimeZone = moment.tz.guess();
             }
       let cityName = cityTimeZone.replace("_", " ").split("/")[1];    
       let cityTime = moment().tz(cityTimeZone);
      let citiesElement = document.querySelector("#cities");
       citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM        Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <strong>${cityTime.format(
    "A"
  )}</strong></div>
  </div>
  <a href ="index.html">Back to Homepage</a>
  `;
}
       updateCasablanca();
       setInterval(updateCasablanca, 1000);
       let citiesSelectElement = document.querySelector("#city");
       citiesSelectElement.addEventListener("change", updateCity);
