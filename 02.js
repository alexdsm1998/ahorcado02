var letrausu= prompt('introduce una letra');

var numeroal= Math.random() * (122 - 97) + 97;
var letraaleatoria = String.fromCharCode(numeroal);
var intentos=0;


while(letrausu =! letraaleatoria || intentos<4) {
  letrausu = prompt('vuelve a introducir una letra')
  intentos++;
}
if(letrausu == letraaleatoria) {
alert('has acertado!!')

}else {
  alert('has fallado')
  document.write('la letra era: ',letraaleatoria)
}
