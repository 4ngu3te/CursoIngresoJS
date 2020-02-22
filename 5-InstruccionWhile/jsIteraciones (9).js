function mostrar()
{

	var maximo=Number.MIN_VALUE;
	var minimo=Number.MAX_VALUE;
	var contador=0;
	var numeroIngresado;
	var respuesta='si';
	while(respuesta=='si')
	{
		numeroIngresado=prompt("INGRESA UN NUMERO");
		numeroIngresado=parseInt(numeroIngresado);
		contador=contador+1;

		if(numeroIngresado < minimo)
			{
				minimo=numeroIngresado;
			}
			if(numeroIngresado> maximo)
			{
				maximo=numeroIngresado;
			}
			respuesta=prompt("QUERES SEGUIR?");
	
	}
	document.getElementById('maximo').value= maximo;
	document.getElementById('minimo').value= minimo;



}//FIN DE LA FUNCIÓN