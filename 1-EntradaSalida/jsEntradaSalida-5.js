/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// var nombre
	// var edad

	// nombre = document.getElementById('elNombre').value;
	// edad = document.getElementById("laEdad").value;
	
	// alert("Usted se llama " +nombre+ " y tiene " +edad+ " años")
	var nombre
	var apellido
	var edad

	nombre=document.getElementById("elNombre").Value;
	apellido=document.getElementById("elApellido").value;
	edad=document.getElementById("laEdad").value;
	
	alert("Usted se llama "+ nombre+" y se apellida"+apellido+"sabemos que su edad es "+edad)
 }

