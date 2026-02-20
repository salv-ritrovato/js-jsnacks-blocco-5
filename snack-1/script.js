const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

// Utilizzo il metodo map per creare un nuovo array partendo da quello della consegna
const namesPrinted = names.map(name =>{
    // Ritorno solo una stringa con "name" fra virgolette
    return `"${name}"`
})
console.log(namesPrinted.join(', '));

