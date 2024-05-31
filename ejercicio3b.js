async function llamar() {
  //creamos una variable que va a recibir el json 
  let respuesta = await fetch("user.json")
  //parseamos el archivo json para poder leerlo 
  let datos = await respuesta.json()

  //se crea un arreglo vacio que es el que va a contener todos los datos 
  let arreglocontenerdor = []

  //se crea un bucle que va recorriendo todos los usuarios que estan en el json
  for (let i = 0; i < datos.users.length; i++) {
    //secrea una condicion que dice que si el usuario en el atributo aprendiz es true entonces se ejecute
    if (datos.users[i].aprendiz === true) {
      //creamos una variable que almacena la respuesta que le manda el github, en este caso esta recorriendo los usuarios y con el punto ingresa al nombre de el usuario
      let respuestGithub = await fetch(`https://api.github.com/users/${datos.users[i].user}/repos`)

      //creamos una variable que va a parsear el fetch de la api de github
      let usuarioGithub = await respuestGithub.json();

      // se crea un arrreglo que va a contener los repositorios sacados de la api
      let contenedor_repositorios = [`${datos.users[i].user}`]

      //se crea un foreach que va a ir recorriendo 1 por 1 el usuario 
      usuarioGithub.forEach(element => {
        contenedor_repositorios.push(element.name) //lo va recorriendo y pushea el nombre de el repositorio
      });

      //aca lo que hacemos es coger los datos que tiene el contenedor_repositorios y lo pusheamos a el nuevo array que es donde queremos que esten todos los datos guardados
      arreglocontenerdor.push(contenedor_repositorios)

      console.log(arreglocontenerdor);//mostramos el arreglo que contiene todos los datos 
    }

  }

}


llamar()// llamamos a la funcion para que se ejecute

