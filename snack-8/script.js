const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// Cerco nell'array 'students' il primo elemento che soddisfa la mia condizione con il metodo find
const studentObj = students.find(student => {
  return student.name === 'Marco Lanci'
});
console.log(studentObj.class);