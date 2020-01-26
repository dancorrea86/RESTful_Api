const cursos = [
  {id: 1, name: 'um'},
  {id: 2, name: 'dois'},
  {id: 3, name: 'tres'},
]

const id = 1;

console.log(cursos[1])

const curso = cursos.find(c => c.id === id);

console.log(curso)