//creamos una funcion declarada anonima
let llamadoGeneral = function () {
  //llamamos al archivo user.json 
  fetch('user.json')
    //este archivo lo devuelve como si fuera una promesa
    .then((usuario) => {//con el .then se pasa como parametro el user
      return usuario.json();//retornamos el user y le ponemos .json para poder utilizarlo despues
    })
    .then((datosG) => {//hacemos otro then que va a recibir los datos
      for (let i = 0; i < datosG.users.length; i++) {//se hace un bucle que va a recorrer la cantidad de usuarios que hay en el json
        if (datosG.users[i].aprendiz === true) {//hacemos una condicional para filtar el aprendiz, si el aprendiz === true
          fetch(`https://api.github.com/users/${datosG.users[i].user}`)//vamos a hacer una peticion
            .then((usuariogit) => {//que va a recibir como parametro a el usuario
              return usuariogit.json();//retornamos al usuario y lo convertimos a json para poder utilizarlo
            })
            .then((datosT) => {//cojemos a datosT que es el que nos muestra todos los datos en general
              console.log(datosT) //mostramos todos los datos
              console.log(datosT.login, datosT.avatar_url)// ya que podemos ver todos los datos solo imprimimos el dato que queremos 
            })
        }
      }
    })
}
llamadoGeneral();



