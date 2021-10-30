var d=document.getElementById("dibujito");
var lienzo1=d.getContext("2d");

dibujarLinea("blue",100,200,250,260);
dibujarLinea("blue",150,250,200,150);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
  lienzo1.beginPath();
  lienzo1.strokeStyle=color;
  lienzo1.moveTo(xinicial, yinicial);
  lienzo1.lineTo(xfinal, yfinal);
  lienzo1.stroke();
  lienzo1.closePath();
}
