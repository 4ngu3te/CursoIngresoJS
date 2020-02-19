function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	var numeroIngresado;

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese el numero");
		numeroIngresado=parseInt(numeroIngresado);
		contador=contador+1
		if(numeroIngresado>0)
		{
			positivo=positivo+numeroIngresado
		}
		if(numeroIngresado<0)
		{
			negativo=negativo*numeroIngresado
		}
		respuesta=prompt("Ingrese 'si' si desea continuar");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN