let nombreCombo1 = "hamburguesa simple";
let precioCombo1 = 650;

let nombreCombo2 = "hamburguesa doble";
let precioCombo2 = 750;

let nombreCombo3 = "hamburguesa triple";
let precioCombo3 = 850;

let nombreCombo4 = "hamburguesa clasica";
let precioCombo4 = 650;

let nombreCombo5 = "hamburguesa de pollo";
let precioCombo5 = 700;

let nombreCombo6 = "hamburguesa vegetariana";
let precioCombo6 = 600;


let unicaCompra;
let cantidadAComprar;
let totalVenta = 0;
let combosAComprar = parseInt(prompt("Ingrese la cantidad de combos distintos que desea comprar:"));

function solicitarPedido (combo, nombre, cantidad, total, precio, unica) {

    if(combo == nombre){

        cantidad = parseInt(prompt("¿Cuántas hamburguesas del combo elegido desea comprar?"));
        total += (cantidad * precio);
        unica = prompt("¿Será esta su compra final?").toLowerCase();
        if(unica == "si"){
            return;
        }
    }
}

function productoNoExistente () {
    alert("No tenemos ese tipo de hamburguesa")
}

for (let i = 0; i < combosAComprar; i++){

    let comboPedido = prompt("Ingrese el nombre del combo que desea comprar \n1)Hamburguesa simple \n2)Hamburguesa doble \n3)Hamburguesa triple \n4)Hamburguesa clasica \n5)Hamburguesa de pollo \n6)Hamburguesa vegetariana").toLowerCase();

    solicitarPedido (comboPedido, nombreCombo1, cantidadAComprar, totalVenta, precioCombo1, unicaCompra);

    solicitarPedido (comboPedido, nombreCombo2, cantidadAComprar, totalVenta, precioCombo2, unicaCompra);

    solicitarPedido (comboPedido, nombreCombo3, cantidadAComprar, totalVenta, precioCombo3, unicaCompra);

    solicitarPedido (comboPedido, nombreCombo4, cantidadAComprar, totalVenta, precioCombo4, unicaCompra);

    solicitarPedido (comboPedido, nombreCombo5, cantidadAComprar, totalVenta, precioCombo5, unicaCompra);

    solicitarPedido (comboPedido, nombreCombo6, cantidadAComprar, totalVenta, precioCombo6, unicaCompra);
    
    if ((comboPedido != nombreCombo1.toLowerCase()) && (comboPedido != nombreCombo2.toLowerCase()) && (comboPedido != nombreCombo3.toLowerCase()) && (comboPedido != nombreCombo4.toLowerCase()) && (comboPedido != nombreCombo5.toLowerCase()) && (comboPedido != nombreCombo6.toLowerCase())) {
        productoNoExistente ()
    }

}

alert("El total de su compra es de $" + totalVenta)  


