function mostrar()
{
	var sexo;
	var nota;
	var contador;
	var acumulador;
	var promedio;
	var notaBaja;
	var sexobaja;
	var contadorbajas;
	contadorbajas=0;
	notaBaja=10;
	acumulador=0;
	contador=0;
		while (contador<5) 
		{
			sexo=prompt("Ingrese el sexo del alumno");

			while (sexo!='f' && sexo !='m') 
			{
				sexo=prompt("Reingrese el sexo del alumno");
			}
			nota=prompt("Ingrese la nota del alumno");
			nota=parseInt(nota);

			while (nota<0 || nota>10) 
			{
				nota=prompt("Reingrese la nota del alumno");
				nota=parseInt(nota);
			}

				if (nota<notaBaja) 
				{
					notaBaja=nota;
					sexobaja=sexo;
				}
				if (sexo=='m' && nota<6) 
				{
					contadorbajas++	;
				}
		contador++;
		acumulador=acumulador+nota;
		promedio=acumulador/contador;
		}
	alert("La nota mas baja es "+notaBaja+" y correspone a alguien de sexo "+sexobaja);
	alert("La cantidad de alumnos masculinos que tienen nota menor a 6 es "+contadorbajas);
	alert("El promedio es "+promedio);
}
