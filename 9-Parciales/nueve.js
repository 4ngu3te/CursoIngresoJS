function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta ='si';
    var tempares;
    var pesopesado;
    var marcapesada;
    var frios;
    var acumulador;
    var contador;
    var livianos;
    livianos=100;
    contador=0;
    acumulador=0;
    frios=0;
    tempares=0;
    pesopesado=0;

    while (respuesta=='si')
    {
        marca=prompt("Ingrese marca del producto");

        peso=prompt("Ingrese peso del producto");
        peso=parseInt(peso);
            while(peso<1 || peso>100)
            {
                peso=prompt("reingrese el peso del producto");
            }   
        temperatura=prompt("Indique la temperatura de conservacion del producto");
            while(temperatura<-30 || temperatura>30)
            {
                temperatura=prompt("Ingrese una temperatura valida");
            }

            if (temperatura%2==0) {
                tempares++;
            }
            if (peso>pesopesado) {
                pesopesado=peso;
                marcapesada=marca;
            }
            if (temperatura<0) {
                frios++;
            }
            if (peso<livianos) {
                livianos=peso
            }
            respuesta=prompt("Sigue ingresando productos?");
    contador++;
    acumulador=acumulador+peso;
    }

    console.log("Pares: "+tempares);
    console.log("Marca pesada: "+marcapesada);
    console.log("Productos a congelar: "+frios);
    console.log("Peso promedio: "+acumulador/contador);
    console.log("Peso minimo "+livianos+" y peso maximo "+pesopesado);
}
