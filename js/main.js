// validacion
function Usuario(nombre,apellido,email, direccion, telefono, pack){
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.direccion = direccion;
  this.telefono = telefono;
  this.pack = pack;

}

function mostrarData() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  var direccion = document.getElementById("direccion").value;
  var telefono = document.getElementById("telefono").value;
  var pack = document.getElementById("pack").value;

  console.log(nombre,apellido);

  const cliente = new Usuario(nombre, apellido, email, direccion, telefono, pack);
  var usuario = [];
  usuario.push(cliente);
  console.log(usuario);

  usuario.forEach(function(element){
  var res = document.getElementById("clientes");
  res.innerHTML += element.nombre + element.apellido + element.email + element.direccion + element.telefono + element.pack; 
  console.log(res);
});
}
//competidores.forEach(function(element){
//  var res = document.getElementById("usuario1");// valor
//  res.innerHTML += "<option value =" + element.nombre + ">" + element.nombre + "</option>";
//  var res2 = document.getElementById("usuario2");// valor
//  res2.innerHTML += "<option value =" + element.nombre + ">" + element.nombre + "</option>";
//});
// function validacion (){
// 	var title = document.getElementById ("form-signin-heading");
// 	var email = document.getElementById ("inputEmail");
//     var password = document.getElementById ("inputPassword");
//     var remember = document.getElementsByTagName ("span")[0];
//     var button = document.getElementsByClassName ("btn")[0];

//   title.innerHTML = "Por favor inicia sesion";
//   email.placeholder = "Correo Electronico";
//   password.placeholder = "Contraseña";
//   remember.innerHTML = "Recordar datos";
//   button.innerHTML = "Iniciar Sesión";

// }

//validacion();