/** La funzione serve ad ottenere un risultato True se la parola è palindroma altrimenti ritorna false.
 * @param parola Stringa
 */
function palindroma( parola ){

    const lunghezzaParola = parola.length
    const lettereParola = parola.split("")
    const lettereInvertite = []

    for (let i = lunghezzaParola-1; i >= 0; i++){

        lettereInvertite.push(lettereParola[i])

    }

    if (lettereParola === lettereInvertite) {

        return true

    } else {

        return false

    }

}