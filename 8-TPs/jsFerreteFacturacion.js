/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var prodUno
    var prodDos
    var prodTres
    var valorFinal
    prodUno=document.getElementById("PrecioUno").value;
    prodUno=parseInt(prodUno)
    prodDos=document.getElementById("PrecioDos").value;
    prodDos=parseInt(prodDos)
    prodTres=document.getElementById("PrecioTres").value;
    prodTres=parseInt(prodTres)

    valorFinal=prodUno+prodDos+prodTres

    alert("La suma del valor de todos los productos es "+valorFinal)

}
function Promedio () 
{
	var prodUno
    var prodDos
    var prodTres
    var valorFinal
    prodUno=document.getElementById("PrecioUno").value;
    prodUno=parseInt(prodUno);
    prodDos=document.getElementById("PrecioDos").value;
    prodDos=parseInt(prodDos);
    prodTres=document.getElementById("PrecioTres").value;
    prodTres=parseInt(prodTres);

    valorFinal=(prodUno+prodDos+prodTres)/3;

    alert("El promedio los productos es "+valorFinal);
}
function PrecioFinal () 
{
	var prodUno;
    var prodDos;
    var prodTres;
    var valorFinal;
    var iva = 21;
    
    
    prodUno=document.getElementById("PrecioUno").value;
    prodUno=parseInt(prodUno);
    prodDos=document.getElementById("PrecioDos").value;
    prodDos=parseInt(prodDos);
    prodTres=document.getElementById("PrecioTres").value;
    prodTres=parseInt(prodTres);

    valorFinal=(prodUno+prodDos+prodTres);
    iva= valorFinal + valorFinal*iva/100;
    alert("El precio final de todos los productos es "+iva);
}