/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   this.nombre = nombre;
   this.edad = edad;

    this.meow = function() {
       return "Meow!"
    }

   
   return this
}


   // const g =new crearGato("javier","gomez")
   // console.log(g.meow())
   // console.log(g.nombre)
   // console.log(g.edad)
  



function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:

   //primera forma
   // var usuario = {"nombre": nombre,"email": email, "password": password}

   //segunda forma
   // var usuario = new Object();
   // usuario.nombre = nombre;
   // usuario.email = email;
   // usuario.password = password;

  //tercera forma
   var usuario = new Object();
   usuario["nombre"] = nombre;
   usuario["email"] = email;
   usuario["password"] = password;



   return usuario;

} 


// console.log(nuevoUsuario("a","b","c"))
// var usuario1 = nuevoUsuario("a","b","c")
// console.log(usuario1.nombre)
// console.log(usuario1["email"])
// console.log(usuario1)



function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:

    objeto[propiedad] = null;
    return objeto;
}

//  var o = {nombre:"javier",edad:57};
//  console.log(agregarPropiedad(o,"nroCelular"))

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   // var areas = { cuadrado: function (){
   //    console.log ("area de cuadrado");
   // }

   // }
   a= objeto[metodo]()

}

// var c = {}
// console.log( invocarMetodo(c,"cuadrado"))


function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   return objetoMisterioso.numeroMisterioso * 5


}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código: 
   delete objeto[propiedad];
   return objeto;
}

// a={p1:"a",p2:"b"}
// console.log (a)

// console.log(eliminarPropiedad(a,"p1"))
// console.log(delete a.p1)

// console.log (a)


function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario.email == undefined ){
      return false

   }else{
      return true
   }

}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if ( objeto.hasOwnProperty(propiedad)){
      return true
   }else{
      return  false
   }


}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
if (objetoUsuario.password == password){
   return true
}else{
   return false
}

}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
      objetoUsuario.password = nuevaPassword;
      return objetoUsuario;
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   for (let i of objetoMuchosUsuarios){
         i.esPremium = true
   }

   return objetoMuchosUsuarios
}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:

   var s = 0;
   for (var i of objetoUsuario.posts){
     console.log(i.likes)
     s += i.likes
   }

  
   return s
}


// var objetoUsuario={
//    posts:[{likes:5},{likes:12}]
//  }
//  var s = 0;
//  for (var i of objetoUsuario.posts){
//    console.log(i.likes)
//    s += i.likes
//  }
//  console.log(s)
 


function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:

   objetoProducto.calcularPrecioDescuento = function () {
      return this.precio - (this.precio * this.porcentajeDeDescuento);
      };
   return objetoProducto.calcularPrecioDescuento()
}


var o = {
   precio:10,
   porcentajeDeDescuento:0.2

}
console.log(o)

console.log(agregarMetodoCalculoDescuento(o))
console.log(o)


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
