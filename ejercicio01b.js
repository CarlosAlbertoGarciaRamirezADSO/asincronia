// creamos una funcion expresada 
let llamar = function () {
  //llamamos el archivo ejercicio1.json
  fetch("ejercicio1.json")

    .then((respuesta) => {//creamos un .then que va a almacenar como parametro la respuesta que le mando el fetch
      return respuesta.json()//retornamos la respuesta y lo convertimos a json
    })
    .then((datos) => { //creamos otro .then que este viene encadenado
      fetch(`https://api.github.com/users/${datos.name}/repos`)// llamamos a el fetch de la api de github 
        .then((respuesta2) => { //cogemos la respuesta que le dejo el fetch
          return respuesta2.json()//retornamos una promesa y la parseamos a json
        })
        .then((respuesta3) => {//cogemos la respuesta que nos dejo la promesa anterior
          respuesta3.forEach(element => { //con un bucle que lo que va a hacer es recorrer la respuesta que le dejo la promesa anterior
            if (element.name === "Evaluacion") {//creamos una condicion que si el nombre es estrictamente igual a Evaluacion 
              console.log(element)//lo imprima
            }
          })
        })
    })
}


llamar();









