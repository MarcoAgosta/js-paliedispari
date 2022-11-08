const risultatoPalindroma = document.getElementById("risultatoPalindroma");
const pulsantePalindroma = document.getElementById("pulsantePalindroma");

pulsantePalindroma.addEventListener ( "click", function() {

    const parolaPalindroma = document.getElementById("getParola").value;
    const testPalindroma = palindroma (parolaPalindroma);

    if (testPalindroma){

        risultatoPalindroma.innerHTML = `La parola è palindroma!`
    
    } else {
    
        risultatoPalindroma.innerHTML = `La parola non è palindroma`
    
    }

} )



const risultatoGioco = document.getElementById("risultatoPariDispari")
const pulsanteGioco = document.getElementById("pulsantePariDispari")

pulsanteGioco.addEventListener( "click", function() {

    const numeroScelto = document.getElementById("numeroscelto").value
    const valoreScelto = document.getElementById("paridispari").value

    const numeroComputer = numeroCasuale()
    const somma = sommaPariDispari(numeroScelto, numeroComputer)

    console.log(numeroScelto)
    console.log(numeroComputer)
    console.log(somma)

    if (somma === valoreScelto){

        risultatoGioco.innerHTML = "Complimenti hai vinto!"

    } else {

        risultatoGioco.innerHTML = "Mi spiace, hai perso."
    }


} )