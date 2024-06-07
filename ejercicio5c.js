//creamos una funcion asincrona
async function llamar() {
    let respuesta = await fetch('user.json');//creamos una variable que le va a hacer la peticion al json
    let usuario = await respuesta.json();//en esta variable lo que haremos sera castear la repuesta de el json

    const handler = {//definimos un manejador para el proxy
        set: function(target, property, value) { //con el metodo set interceptamos las propiedades de un objeto
            if (property === "user" && target.user.includes("ADSO")) { // creamos una condicion que valide el correo que este caso user 
                console.log(`Cambiando ${property} a mayúsculas`);//imprimimos que vamos a cambiar el usuario actual
                target[property] = value; //asginamos un nuevo valor a la propiedad name
            } else {
                console.log(`su nombre no ha sido cambiado. Usted es instructor`);//si no se cumple la condicion mostramos el mensaje que no es aprendiz
            }
        }
        };

    for (let i = 0; i < usuario.users.length; i++) {//se crea un bucle que va a recorrer los users 1 por 1 con el length
        let user = usuario.users[i];//aca estamos extrayendo individualmente los usuarios a medida que el bucle avanza
        
        
        if (user.user.includes("ADSO")) {//creamos la condicion que si hay un elemento que sea ADSO se cumpla la condicion
            
            let proxy = new Proxy(user, handler);//instanciamos la clase proxy
            console.log(`usuario original: ${proxy.user}`);// mostramos cual es el usuario original que tiene en el json
            proxy.user = user.user.toUpperCase();// pasamos el usuario a MAYUSCULAS
            console.log(`usuario modificado: ${proxy.user}`);//mostramos el usuario modificado con los usuarios ya en mayusculas
            console.log("");//hacemos un salto de linea para que se vea mejor en la consola :)
        }
    }
};
llamar();