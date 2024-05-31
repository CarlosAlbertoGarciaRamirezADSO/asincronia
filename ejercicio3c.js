
//creamos una arrow function que lo que hara es filtrar si es aprendiz y esta funcion funcionara como callback
const filtrar = x => x.aprendiz === true;


async function llamar() {// creamos una funcion anonima asincrona 
  let respuesta = await fetch('user.json')// creamos una variable que va a llamar a un archivo json
  let datos = await respuesta.json() //creamos una variable que lo que va a hacer es parsear el json
  let filtro = datos.users.filter(filtrar)//creamos una variable filtro que va a ingresar al json que es datos y va a buscar users y con el filter lo que va a recibir el filter es la arrow function que en este caso es un callback, filtramos los aprendices que dan true y los va a almacenar en la variable fitro 
  console.log(filtro)//por ultimo imprimimos la variable filtro que es la que almacena todos los aprendices que su valor es true
}
llamar()//llamamos a la funcion 