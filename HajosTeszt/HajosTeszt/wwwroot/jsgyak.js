/*window.onload = function () {
    let hova = document.getElementById("pascal")
    for (var s = 0; s < 10; s++) {
        let sor = document.createElement("div");
        sor.classList.add("sor");
        hova.appendChild(sor)

        for (var o = 0; o < 10; o++) {
            let szám = document.createElement("div");
            sor.appendChild(szám);
            szám.classList.add("doboz");
            szám.innerText = (s + 1) * (o + 1);
            szám.style.color = "fuchsia";
        }
    }
}*/

window.onload = function () {
    let hova = document.getElementById("kérlek")
    for (var i = 0; i < 10; i++) {
        var sor = document.createElement("div");
        sor.classList.add("sor");
        hova.appendChild(sor);
        sor.innerText = i + 1 + ";";
        sor.style.backgroundColor = `rgb(${255 - i*10}, ${154 - i*10}, ${215 - i*10})`;
    }


    let hov = document.getElementById("pascal")
    for (var s = 0; s < 10; s++) {
        let sor = document.createElement("div");
        sor.classList.add("sor");
        hov.appendChild(sor)

        for (var o = 0; o < 10; o++) {
            let szám = document.createElement("div");
            sor.appendChild(szám);
            szám.classList.add("doboz");
            let eredmény = 1;
            for (var i = 2; i < 10; i++) {
                eredmény = eredmény * i;
            }

            szám.innerText = eredmény;
        }
    }
}

