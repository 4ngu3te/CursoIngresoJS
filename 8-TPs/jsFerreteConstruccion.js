/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
  
    var largo;
    var ancho;
    var perimetro;
    var alambre;

    largo=document.getElementById("Largo").value;
    largo=parseInt(largo);
    ancho=document.getElementById("Ancho").value;
    ancho=parseInt(ancho);
    

    perimetro=(2*ancho + 2*largo);

    alambre= perimetro * 3;

    alert("La cantidad de alambre a comprar es "+ alambre);

}
function Circulo () 
{
    var radio;
    var alambre;
    radio=document.getElementById("Radio").value;
    radio=parseInt(radio);
    alambre= radio * 3;
    alert("La cantidad de alambre a comprar es "+ alambre+" metros.");
}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var bolsasCemento;
    var bolsasCal;

    largo=document.getElementById("Largo").value;
    largo=parseInt(largo);
    ancho=document.getElementById("Ancho").value;
    ancho=parseInt(ancho);

    area= ancho*largo;

    bolsasCemento= area * 2;
    bolsasCal= area * 3;

    alert("Para un terreno de "+area+" metros cuadrados se necesitan "+bolsasCemento+" boslas de cemento y "+bolsasCal+" bolsas de cal");
   
}