//creamos una arrow function que va a filtrar
const filtrar = x => x.aprendiz === true;

//creamos una function anonima asincrona 
async function llamar() {
    let respuesta = await fetch('user.json')// creamos una variable que va a llamar al user.json
    let usuario = await respuesta.json();//en esta variable lo que haremos sera castear la repuesta de el json
    let datos = usuario.users.filter(filtrar)// creamos una variable que va a ingresar al json y va a ingresar a usuarios y se utiliza el metodo filter y va a recibir como parametro el callback que en este caso es la arrow function
    
    for (let i = 0; i < datos.length; i++) { //creamos un bucle que va a recorrer todos los datos de el json
        let respuestGithub = await fetch(`https://api.github.com/users/${datos[i].user}/repos`) //se crea una variable que va a recibir la api de github y con el bucle vamos recorriendo los usuarios
        let usuarioGithub = await respuestGithub.json();//casteamos la respuesta y la convertimos a json
        let contenedor_repo = []//creamos un arreglo vacio que va a contener los repositorios

        usuarioGithub.forEach(element => {// creamos un bucle que va a recorrer elemento por elemento los repositorios
            contenedor_repo.push(element.name)//cada repositorio que se encuentra se va a almacenar en el arreglo de arriba con el nombre contenedor_repo
        });
        contenedor_repo.sort()//usamos el metodo de el array .sort para organizar el array en orden alfabetico
        console.log(`${datos[i].user}`) // mostramos el nombre de la persona
        console.log(contenedor_repo);//imprimimos los repositorios 
        } 
};

llamar()//llamamos a la funcion