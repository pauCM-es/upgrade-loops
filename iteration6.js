//**Iteración #6: Mixed For e includes SI**

//? Usa un bucle **for** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
//? Recuerda que puedes usar la función ***.includes()*** para comprobarlo.

const toys = [
  {id: 5, name: 'Buzz MyYear'}, 
  {id: 11, name: 'Action Woman'}, 
  {id: 23, name: 'Barbie Man'}, 
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato felix'}
  ]


for (let i = 0; i < toys.length; i++) {
  const toy = toys[i];
  if (toy.name.includes("gato")) {
    toys.splice(i, 1)
    //al eliminar el juguete del array, el lenght es mas corto y se salta el siguiente juguete.
    //le fuerzo a volver al indice anterior para no perder ese juguete
    i--
  }
}

console.log(toys)