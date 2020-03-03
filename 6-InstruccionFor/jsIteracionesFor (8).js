function mostrar()
{
	var numeroIngresado;
	var contador;
	numeroIngresado=prompt("Ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);

		for(contador=2;contador<numeroIngresado;contador++){
			console.log(contador);
				if(numeroIngresado%contador==0)
				{
					console.log(numeroIngresado+' no es primo');
					break;
				}
				
		}
		if(numeroIngresado==contador)
		{
			console.log(numeroIngresado+ ' es primo');
		}
}//FIN DE LA FUNCIÓN