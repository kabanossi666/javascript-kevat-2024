
// Palvelut sivun näyttäminen
function palvelut(){
    let palvelut = `<h2>Palvelumme</h2>   
            <p>Eläinlääkäri</p>
            <p>Päivähoito</p>
            <p>Yöhoito</p>
    `
    document.getElementById("sisältö").innerHTML = palvelut
}

// Yhteystiedot
function yhteystiedot(){
    document.getElementById("sisältö").innerHTML = ""
    var otsikko = document.createElement("h2")
    var teksti = document.createTextNode("Yhteystiedot")
    otsikko.appendChild(teksti)
    var sisältö = document.getElementById("sisältö")
    sisältö.appendChild(otsikko)

    var puhelin = document.createElement("h4");
    var puhTeksti = document.createTextNode("P. 066606969")
    puhelin.appendChild(puhTeksti);
    sisältö.appendChild(puhelin)
}

//Teema
function tumma(){
    document.getElementById("sivu").style.backgroundColor = "DarkSlateGray"
    document.getElementById("sivu").style.color = "Azure"
    localStorage.setItem("teema", "tumma")
    
}

function vaalea(){
    document.getElementById("sivu").style.backgroundColor = "Azure"
    document.getElementById("sivu").style.color = "DarkSlateGray"
    localStorage.setItem("teema", "vaalea")
    
}


if (localStorage.getItem("teema") == "tumma"){
    tumma()
}
else {
    vaalea()
}


//localStorage.clear()
