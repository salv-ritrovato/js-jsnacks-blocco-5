const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// Utilizzo il metodo filter per filtrare fra i numeri dell'array in cerca di quelli pari
const evenNumbers = nums.filter(even => {
    // Creo una condizionale if per cercare i numeri pari utilizzando l'operatore modulo
    if (even % 2 === 0) {
        return true;
    }
});

console.log(evenNumbers);


