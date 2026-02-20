const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// Ciclo for each per ciclare fra gli elementi dell'array
people.forEach((persona) => {
  // Stampo in console persona.name -- dot notation per identificare solo il nome delle persone ed ottengo il risultato
  console.log(persona.name);
});