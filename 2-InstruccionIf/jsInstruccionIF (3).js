function mostrar()
{
//tomo la edad  
	var edad

	edad=document.getElementById('edad').value;

	if(edad > 17)
		{
			alert("Es mayor de edad");
		}
	else
		{
			alert("usted es menor de edad");
		}
}