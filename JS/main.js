const risultatoPalindroma = document.getElementById("risultatoPalindroma");
const pulsantePalindroma = document.getElementById("pulsantePalindroma");

pulsantePalindroma.addEventListener ( "click", function() {

    const parolaPalindroma = document.getElementById("getParola").value;
    const testPalindroma = palindroma (parolaPalindroma);

    console.log(testPalindroma)

    if (testPalindroma){

        risultatoPalindroma.innerHTML = `La parola è palindroma!`
    
    } else {
    
        risultatoPalindroma.innerHTML = `La parola non è palindroma`
    
    }

} )



