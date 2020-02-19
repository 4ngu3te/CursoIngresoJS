function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);

	while(numero<0 || numero>10)
	{
		var numero = prompt("Error, reingrese un número entre 0 y 10.");
		
	}
	document.getElementById('Numero').value=numero

}//FIN DE LA FUNCIÓN