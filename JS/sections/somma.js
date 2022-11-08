/**la funzione restituisce True se la somma dei due numeri è pari, altrimenti restituisce false.
 *  @a numero
 *  @b numero
 */ 
function sommaPariDispari(a, b) {

    const num1 = parseInt(a);
    const num2 = parseInt(b);

    const somma = num1 + num2;

    if (somma % 2 == 0) {

        return true

    } else if (somma % 2) {

        return false

    };
}