const parolaPalindroma = document.getElementById("getParola")
const risultatoPalindroma = document.getElementById("risultatoPalindroma")
const pulsantePalindroma = document.getElementById("pulsantePalindroma")


pulsantePalindroma.addEventListener ( "click", function() {

    const testPalindroma = palindroma (parolaPalindroma)
    
    if (testPalindroma){

        risultatoPalindroma.innerHTML = `La parola è palindroma!`
    
    } else {
    
        risultatoPalindroma.innerHTML = `La parola non è palindroma`
    
    }

} )



