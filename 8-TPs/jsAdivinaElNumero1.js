/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
	var numeroIngresado;
	var contadorIntentos=0;
	var aleatorio;
function comenzar()
{
	aleatorio=Math.floor(Math.random() * 100);
	console.log(aleatorio);
}

function verificar()
{
	numeroIngresado=document.getElementById("numero").value;
	numeroIngresado=parseInt(numeroIngresado);
	while(numeroIngresado!=aleatorio)
	{
		alert("Segui participando campeon");
		contadorIntentos++;
		break;
	}
	if(numeroIngresado==aleatorio)
	{
		alert("lo lograste en "+contadorIntentos+" intentos, capo");
	}
	else
	{
		if(numeroIngresado<aleatorio)
		{
			alert("te falta");
		}
		else
		{
			alert("te pasaste");
		}
	}
	console.log(contadorIntentos);
document.getElementById("intentos").value=contadorIntentos;
}