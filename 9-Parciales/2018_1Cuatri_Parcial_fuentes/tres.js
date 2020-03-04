/*De los movimientos de un banco
necfesito saber:
el nombre del cliente
la edad del cliente(debe ser mayor de edad)
sexo
tipo de transaccion(extraccion o deposito)
importe (validar que no sea negativo)

jose 37 m extraccion 1000
maria 40 f deposito 2000
jesus 33 m extraccion 1500
melchor 20 m  extraccion 1300 

promedio de edad
nombre del mas joven
cantidad de hombres=3
cantidad de mujeres=1
sexo del importe mas alto=f
operacion mas utilizada=ext
importe del mas viejo=2000

*/
function mostrar()
{
	var nombreCliente;
	var edadClientes;
	var sexoCliente;

	var tipoDeTransaccion;
	var tipoDeTransaccionDeposito;
	var tipoDeTransaccionExtraccion;
	var tipoDeTransaccionMasUsada;

	var importe;
	var importeMayor;
	var importeMayorSexo;

	var respuesta;
	var promedioEdad;
	var contador;
	var acumulador;

	var nombreClienteJoven;
	var edadClientesJoven;
	var edadClientesMayor;

	var cantidadHombres;
	var cantidadMujeres;


	respuesta='si';
	acumulador=0;
	contador=0;
	promedioEdad=0;

	cantidadMujeres=0;
	cantidadHombres=0;

	tipoDeTransaccionDeposito=0;
	tipoDeTransaccionExtraccion=0;

	do
	{
		do
		{
			nombreCliente=prompt("Ingrese el nombre del cliente");
		}while(!isNaN(nombreCliente));
		do
		{
			edadClientes=prompt("Ingrese la edad del cliente");
			edadClientes=parseInt(edadClientes);
		}while(isNaN(edadClientes) || edadClientes<18 || edadClientes>99);
		do
		{
			sexoCliente=prompt("Ingrese el sexo del cliente 'f'/'m'");
		}while(!isNaN(sexoCliente) || sexoCliente!='f' && sexoCliente!='m');
		do
		{
			tipoDeTransaccion=prompt("Ingrese el tipo de transaccion del cliente");
		}while(!isNaN(tipoDeTransaccion) || tipoDeTransaccion!='extraccion' && tipoDeTransaccion!='deposito');
		do
		{
			importe=prompt("Ingrese el importe");
			importe=parseInt(importe);
		}while(isNaN(importe) || importe<1 || importe>5000);
		

			if(contador==0 || edadClientes<edadClientesJoven)
			{
				edadClientesJoven=edadClientes;
				nombreClienteJoven=nombreCliente;
			}
			if(contador==0 || edadClientes>edadClientesMayor)
			{
				edadClientesMayor=edadClientes;
				importeMayor=importe;
				importeMayorSexo=sexoCliente;
			}
			if(sexoCliente=='m')
			{
				cantidadHombres++;
			}else{
				cantidadMujeres++;
			}

			switch(tipoDeTransaccion){
		
				case 'deposito':
					tipoDeTransaccionDeposito++;
					break;
				case 'extraccion':
					tipoDeTransaccionExtraccion++;
					break;
			}
		contador++;
		acumulador=acumulador+edadClientes;
		respuesta=prompt("Desea seguir ingresando datos si/no");
	}while(respuesta=='si');

	if(tipoDeTransaccionExtraccion>tipoDeTransaccionDeposito)
			{
				tipoDeTransaccionMasUsada='extraccion';
			}else{
				tipoDeTransaccionMasUsada='deposito'
			}
	promedioEdad=acumulador/contador;
	document.write("El promedio de edad es: "+promedioEdad+ "<br>");

	document.write("Nombre del cliente mas joven: "+nombreClienteJoven+ "<br>");

	document.write("cantidad de hombres: "+cantidadHombres+ "<br>");

	document.write("cantidad de mujeres: "+cantidadMujeres+ "<br>");

	document.write("El sexo del importe mas alto es: "+importeMayorSexo+ "<br>");

	document.write("operacion mas utilizada: "+ tipoDeTransaccionMasUsada+ "<br>");

	document.write("importe de la persona mas vieja: "+importeMayor+ "<br>");
}
