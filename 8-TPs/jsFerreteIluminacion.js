/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var Cantidad;
 	var marca;
 	var precio;
 	var porcentajeDeDescuento;
 	precio=35;
 	
 	Cantidad=document.getElementById('Cantidad').value;
 	Cantidad=parseInt(Cantidad);
 	marca=document.getElementById('Marca').value;
 	if(Cantidad>5)
 	{//A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
 		porcentajeDeDescuento=50;
 		
 	}else
 	{//B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
 		if (Cantidad==5) 
 		{
 			if(marca=="ArgentinaLuz")
 			{
				porcentajeDeDescuento=40;
 			}else
 			{
 				porcentajeDeDescuento=30;	
 			}
 		}else
 		{//	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
 			if (Cantidad==4) 
 			{
 				if( marca=="ArgentinaLuz"|| marca=="FelipeLamparas")
 				{
 					porcentajeDeDescuento=25;
 				}else
 				{
 					porcentajeDeDescuento=20;
 				}
 			}else
 			{//D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
 				if(cantidad==3)
 				{
 					if(marca=="ArgentinaLuz")
 					{
 						porcentajeDeDescuento=15;
 					}else
 					{
 						if(marca=="FelipeLamparas")
 						{
 							porcentajeDeDescuento=10;
 						}else
 						{
 							porcentajeDeDescuento=5;
 						}
 					}
 				}
 			}
 		}
 	}
	descuento=precio*Cantidad*porcentajeDeDescuento/100;
	document.getElementById("precioDescuento").value=descuento;	
	if(descuento>120)
		
}
