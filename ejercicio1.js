//se crea una variable que va a filtrar un nombre
const filtrar = x => x.name === "Evaluacion"

  //se crea una funcion anonima asincrona autoejecutable 
  (async function () {
    //se crea una variable que va a esperar la llamada de el json
    let response = await fetch("ejercicio1.json")
    //creamos otra varible que va a convertir los datos para poder leerlos
    let user = await response.json();

    // mandamos otra peticion que espere la respuesta de la api 
    let respuestagithub = await fetch(`https://api.github.com/users/${user.name}/repos`)
    // creamos una variable que convertira los datos para poder leerlo
    let usuariogithub = await respuestagithub.json()

    //se utiliza la variable que se va a recorrer con el forEach y buscara a todos los usuarios que tiene la variable usuariogithub 
    usuariogithub.forEach(element => {
      //creamos una condicional que si el elemento que se recorre.name es estrictamente a evaluacion
      if (element.name === "Evaluacion") {
        //imprimimos el elemento
        console.log(element)
      }
    });
  })();



