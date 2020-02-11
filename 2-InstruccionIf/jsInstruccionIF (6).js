function mostrar()
{
//tomo la edad  
var edad

edad=document.getElementById('edad').value;
if(edad > 17)
	{
		alert("Es Adolecente");
	}else{
		if(edad < 13)
		{
			alert("Es un niño");
		}else
			{
				alert("Es un adulto");
			}
		}
}//FIN DE LA FUNCIÓN