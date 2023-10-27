document.getElementById("submit-button").addEventListener("click", function () {
    let cinema = document.getElementById("cinema").value;
    let date = document.getElementById("date").value;
    let currentDate = new Date();

    if (cinema === "") {
        document.getElementById("cinema-error").textContent = "Te rugăm să alegi un cinema.";
    } else {
        document.getElementById("cinema-error").textContent = "";
    }

    if (date === "") {
        document.getElementById("date-error").textContent = "Te rugăm să completezi data.";
    } else {
        document.getElementById("date-error").textContent = "";
    }

    let selectedDate = new Date(date);
    if (selectedDate < currentDate){
        document.getElementById("date-error").textContent = "Data trebuie să fie în viitor.";
    }
    if (cinema === "" || date === "" || (selectedDate < currentDate)) {
        return; // Nu face nimic dacă există erori
    }

    // Dacă ambele câmpuri sunt completate, poți continua cu procesarea sau trimiterea datelor.
    // Aici poți adăuga codul pentru trimiterea datelor către server sau alte acțiuni.
});
