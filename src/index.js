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
       updateCasablanca();
       setInterval(updateCasablanca, 1000);
