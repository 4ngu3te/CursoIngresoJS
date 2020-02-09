function mostrar()
{
    var precio
    var descuento
    var precioFinal

    precio=prompt("Ingrese el costo","Costo")
    precio=parseInt(precio)
    descuento=prompt("Ingrese el descuento","Descuento")
    descuento=parseInt(descuento)

    precioFinal= precio - (precio*descuento/100)

    document.getElementById("elPrecioFinal").value=precioFinal;
}
