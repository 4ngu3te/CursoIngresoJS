/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	nombre=prompt("Tu nombre","Introduce tu nombre")
	var nombre
	
	document.getElementById("elNombre").value=nombre
}

