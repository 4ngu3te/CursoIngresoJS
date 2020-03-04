function mostrar()
{
    var letra;
    var numero;
    var pares;
    var respuesta='si';
    var impares;
    var ceros;
    var positivos;
    var contador;
    var promedios;
    var negativos;
    var maximo;
    var letramax;
    var num_max;
    maximo=0;
    negativos=0;
    contador=0;
    positivos=0;
    ceros=0;
    impares=0;
    pares=0;
    
    while (respuesta=='si')
    {
        letra=prompt('Ingrese una letra');
        numero=prompt('Ingrese un numero');
        numero=parseInt(numero);
            while (numero<-100 || numero>100) 
            {
                numero=prompt('Ingrese un numero valido'); 
            }
            if(numero%2==0)
            {
                pares++;
            }else
            {
                impares++;
            }
            if (numero>0)
            {
                positivos=positivos+numero;
            }else
            {
                negativos=negativos+numero;
            }  
            if (numero>maximo) 
            {
                maximo=numero;
                letramax=letra;
            }

            if(numero==0){
                    ceros++;
            }
        respuesta=prompt('desea seguir ingresando datos?');
        contador++;
        promedios=positivos/contador;
            console.log("Pares: "+pares);
            console.log("Impares: "+impares);
            console.log("Ceros: "+ceros);
            console.log("Promedios: "+promedios);
            console.log("Suma de Negativos: "+negativos);
            console.log("Letra y numero maximo:"+letramax+''+maximo);
    }
}