//creamos una funcion asincrona
async function llamar() {
    let respuesta = await fetch('user.json');//creamos una variable que le va a hacer la peticion al json
    let usuario = await respuesta.json();//en esta variable lo que haremos sera castear la repuesta de el json

    const handler = {//definimos un manejador para el proxy
        set: function(target, property, value) { //con el metodo set interceptamos las propiedades de un objeto
            if (property === "name") { // creamos una condicion que valide el name 
                console.log(`Cambiando ${property} a mayúsculas`);//imprimimos que vamos a cambiar el nombre actual
                target[property] = value; //asginamos un nuevo valor a la propiedad name
            } else {
                console.log(`su nombre no ha sido cambiado. Usted es instructor`);//si no se cumple la condicion mostramos el mensaje que no es aprendiz
            }
        }
        };

    for (let i = 0; i < usuario.users.length; i++) {//se crea un bucle que va a recorrer los users 1 por 1 con el length
        let user = usuario.users[i];//aca estamos extrayendo individualmente los usuarios a medida que el bucle avanza
        
        
        if (user.name.split(' ').length >= 2) {//creamos la condicion para verificar si tiene mas de 2 nombres y con el split se está dividiendo el nombre del usuario en palabras individuales 
            
            let proxy = new Proxy(user, handler);//instanciamos la clase proxy
            console.log(`Nombre original: ${proxy.name}`);// mostramos cual es el nombre original que tiene en el json
            proxy.name = user.name.toUpperCase();// pasamos el nombre a MAYUSCULAS
            console.log(`Nombre modificado: ${proxy.name}`);//mostramos el nombre modificado con los nombres ya en mayusculas
            console.log("");//hacemos un salto de linea para que se vea mejor en la consola :)
        }
    }
};
llamar();