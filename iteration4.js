//**Iteración #4: Probando For...in SI**

//? Usa un **for...in** para imprimir por consola los datos del alienígena.. 
//? Puedes usar este objeto:

const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}


for (key in alien) {
  console.log (key)
  console.log (alien[key])
  console.log ("----------")
}