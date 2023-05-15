function mostrarSaludo(){
 
  fecha = new Date(); 
  hora = fecha.getHours();
 
  if(hora >= 5 && hora < 12){
    texto = "Buenos Dias";
    imagen = "https://img.freepik.com/vector-gratis/simbolo-vector-e-ilustracion-icono-sol-aislado-sobre-fondo-blanco_231786-4728.jpg";
  }
 
  if(hora >= 12 && hora < 19){
    texto = "Buenas Tardes";
    imagen = "https://cdn-icons-png.flaticon.com/512/984/984585.png";
  }
 
  if(hora >= 19 || hora < 5){
    texto = "Buenas Noches";
    imagen = "https://cdn-icons-png.flaticon.com/512/39/39857.png";
  }
 
  document.images["tiempo"].src = imagen;
  document.getElementById('txtsaludo').innerHTML = texto;
 
}