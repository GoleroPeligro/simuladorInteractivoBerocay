// simulador de prestamo para la compra de una casa, el banco te presta entre un 80% y un 90%
// del costo total segun el precio y se financia en cuotas, el resto se debe entregar en el momento de la compra.
// En el simulador se debe ingresar el precio de la propiedad y la cantidad de años para para pagar el prestamo, luego el simulador te devuelve la cantidad de dinero del prestamo y la cuota mensual.


let precio = Number(prompt("Bienvenido/a al simulador de préstamos hipotecarios. \n \nPor favor ingrese el precio de la propiedad en dolares."));
let cuotas;
let porcentajePrestamo;

//-------Verificar que el usuario haya ingresado los datos-------
while (precio === 0) {
    precio = Number(prompt("Debe ingresar el costo de la propiedad para seguir con el simulador."));
}

cuotas = Number(prompt("Ingrese la cantidad de años en los que quiere financiar su préstamo.\n\nRecuerde que el financiamiento NO puede exceder los 35 años"));

while (cuotas === 0) {
    cuotas = Number(prompt("Debe ingresar la cantidad de años en los que quiere financiar su préstamo."));
}

while (cuotas > 35) {
    let otraCuota = Number(prompt("Debe ingresar la cantidad de años menor o igual a 35."));
    if(otraCuota > 0 && otraCuota <= 35){
        cuotas = otraCuota;
    }
}

//------- establecer porcentaje del préstamo segun el precio de la propiedad-------
if (precio < 60000) {
    porcentajePrestamo = 90;
} else if (precio >= 60000 && precio < 120000) {
    porcentajePrestamo = 85;
} else if (precio >= 12000) {
    porcentajePrestamo = 80;
}

//------- función para calcular el prestamo y las cuotas------- 
const prestamo = (costo, financiamiento, porcentaje) => {
    
    let presTotal = Math.round(costo * (porcentaje / 100));
    let cuotaMens = Math.round(presTotal / (financiamiento * 12));

    alert("El préstamo por el " + porcentaje + "% del costo total de la propiedad es de:\nUSD " + presTotal + "\n\nLa cuota mensual es de:\nUSD " + cuotaMens);
}


prestamo(precio, cuotas, porcentajePrestamo);
