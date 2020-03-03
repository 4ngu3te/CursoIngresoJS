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
	var nombre;
	var cantidadPersonas;
	var cantidadDias;
	var formaDePago;
	var respuesta;
	var maximoCantidadPersonas;
	var maximoDePersonasNombre;
	var cantidadDiasMaximos;
	var contador;
	var contadorqr;
	var contadorEfectivo;
	var contadorTarjeta;
	contador=0;
	contadorEfectivo=0;
	contadorTarjeta=0;
	contadorqr=0;


		do
		{
			nombre=prompt("Ingrese el nombre del huesped");
				do
				{
					cantidadPersonas=prompt("Ingrese la cantidad de personas");
					cantidadPersonas=parseInt(cantidadPersonas);
				}while(isNaN(cantidadPersonas) || cantidadPersonas<0 && cantidadPersonas>20);

				do
				{
					cantidadDias=prompt("Ingrese la cantidad de dias");
					cantidadDias=parseInt(cantidadDias);
				}while(cantidadDias<0 && cantidadDias>20);
				do
				{
					formaDePago=prompt("Ingrese la forma de pago");
				}while(!isNaN(formaDePago) || formaDePago!="efectivo" && formaDePago!="qr" && formaDePago!="tarjeta");

				if(contador==0 || cantidadPersonas>maximoCantidadPersonas)
				{
					maximoCantidadPersonas=cantidadPersonas;
					maximoDePersonasNombre=nombre;
				}

				if (contador==0 || cantidadDias>cantidadDiasMaximos) 
				{
					cantidadDiasMaximos=cantidadDias;
				}
					switch(formaDePago)
					{
						case "efectivo":
						contadorEfectivo++;
						break;
						case "qr":
						contadorqr++;
						break;
						case "tarjeta":
						contadorTarjeta++;
						break;

					}

			respuesta=prompt("'s' para continuar");
			contador++;
		}while(respuesta=='s');
}
