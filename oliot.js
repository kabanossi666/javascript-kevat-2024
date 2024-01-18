
var autot = [{id: 1, merkki: "Toyota", vuosimalli: 2002, hinta: 3200},
 {id: 2, merkki: "Honda", vuosimalli: 1994, hinta: 1200},
 {id: 3, merkki: "Lada", vuosimalli: 1984, hinta: 690}]

var hakusana = ""

 var standard_input = process.stdin
 standard_input.setEncoding('utf-8')
 console.log("JavaScript, hakusovellus ")
 console.log("Sovellus suljetaan kirjoittamalla 'exit'")
 process.stdout.write("Anna autoja merkillä: ")
 
 standard_input.on('data', function (data) {


    if (data === 'exit\r\n'){
        console.log("Kiitos ja näkemiin.")
        process.exit()
    } 

    else {
        hakusana = data.trim().toLowerCase()
        
        autot.forEach(a => {
        if (a.merkki.toLowerCase().includes(hakusana)) {
        console.log("Merkki: " + a.merkki + " vm. " + a.vuosimalli + " Hinta: " + a.hinta)
        }    
        }          
        )
    }}

 )   
        
        
    
 


    



// autot.forEach(auto => {
//     // Black friday: poista kommentti
//     // auto.hinta = 299

//     console.log(auto.merkki + " vuodelta " + auto.vuosimalli)
//     console.log("Hinta: " + auto.hinta)
//     console.log("**********************")
// }
// )

// autot.forEach(auto => {

//     if (auto.id === 3) {
//     console.log("Auto id:llä " + auto.id + " " + auto.merkki + " on LUJAA LAATUA " )
//     console.log("**********************")
//     }
// }
// )
