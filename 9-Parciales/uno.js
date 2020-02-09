
function mostrar()
{
    var ancho
    var largo
    var perimetro
    ancho=prompt("Ingrese el ancho","Ancho")
    ancho=parseInt(ancho)
    largo=prompt("Ingrese el largo", "Largo")
    largo=parseInt(largo)
    perimetro=(2*ancho)+(2*largo)
    alert("El perimetro del cuadrado es " + perimetro)
}
