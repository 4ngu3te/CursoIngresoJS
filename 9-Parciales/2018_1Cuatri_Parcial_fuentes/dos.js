/* 
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva

*/
function mostrar()
{
  var nombreHuesped;
  var cantidadDePersonas;
  var cantidadDiaEstadia;
  var formaDepago;
  var respuesta='si';
  var contador;

  var maximoNombreHuesped;
  var maximoCantidadDePersonas;
  var maximoCantidadDeEstadia;
  var maximoPersonasTiempo;

  var contadorEfectivo;
  var contadorTarjeta;
  var contadorQR;

  var masUtilizada;
  var promedioDias;
  
  promedioDias=0;
  contador=0;
  contadorQR=0;
  contadorEfectivo=0;
  contadorTarjeta=0;

  	do
  	{
  		do
  		{
  			nombre=prompt("Ingrese el nombre del huesped");
  		}while(!isNaN(nombre));
  		do
  		{
  			cantidadDePersonas=prompt("Ingrese la cantidad de acompañantes");
  			cantidadDePersonas=parseInt(cantidadDePersonas);
  		}while(cantidadDePersonas<1 && cantidadDePersonas>20);
  		do
  		{
  			cantidadDiaEstadia=prompt("Ingrese la cantidad de dias a Hospedarse");
  			cantidadDiaEstadia=parseInt(cantidadDiaEstadia);
  		}while(cantidadDiaEstadia<1 && cantidadDiaEstadia>20);
  		do
  		{
  			formaDepago=prompt("Ingrese la forma de pago, efectivo, tarjeta, QR");
  		}while(!isNaN(formaDepago)|| formaDepago!='efectivo' && formaDepago!='tarjeta' && formaDepago!='QR');

  				if(contador==0 || cantidadDePersonas>maximoCantidadDePersonas)
  				{
  					maximoCantidadDePersonas=cantidadDePersonas;
  					maximoNombreHuesped=nombre;
  				}
  				if(contador==0 || cantidadDiaEstadia>maximoCantidadDeEstadia)
  				{
  					maximoCantidadDeEstadia=cantidadDiaEstadia;
  					maximoPersonasTiempo=cantidadDePersonas;
  				}
  					switch(formaDepago)
  					{
  						case 'efectivo':
  							contadorEfectivo++;
  							break;
  						case 'tarjeta':
  							contadorTarjeta++;
  							break;
  						case 'QR':
  							contadorQR++;
  							break;
  					}
  				if(contadorEfectivo>contadorTarjeta)
  				{
  					masUtilizada='efectivo';
  				}else
  				{
  					if (contadorEfectivo<contadorTarjeta)
  					{
  						masUtilizada='tarjeta';
  					}else
  					{
  						masUtilizada='QR';
  					}
  				}
  				respuesta=prompt("Desea seguir ingresando datos? si/no");
  				contador++;
  				promedioDias=promedioDias+cantidadDiaEstadia;
  	}while(respuesta=='si');

  	console.log("El huesped que trajo mas personas es:" +maximoNombreHuesped);
  	console.log("La cantidad de personas que se quedaron mas dias fueron: "+maximoCantidadDePersonas);
  	console.log("La forma de pago mas utilizada es: "+masUtilizada);
  	console.log("El promedio de dias reservados es: "+promedioDias/contador);
}
