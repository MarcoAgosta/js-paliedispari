/**la funzione restituisce la stringa "Pari" se la somma dei due numeri è pari, altrimenti restituisce la stringa "Dispari".
 *  @a numero
 *  @b numero
 */ 
function sommaPariDispari(a, b) {

    const num1 = parseInt(a);
    const num2 = parseInt(b);

    const somma = num1 + num2;

    if (somma % 2 == 0) {

        return "Pari"

    } else if (somma % 2) {

        return "Dispari"

    };
}