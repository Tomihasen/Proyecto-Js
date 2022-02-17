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
let vecesAComprar = parseInt(prompt("Ingrese la cantidad de combos distintos que desea comprar:"));

function solicitarPedido (combopedido, nombrecombo, cantidad, total, precio, unica) {
    if(combopedido == nombrecombo){

        cantidad = parseInt(prompt("¿Cuántas hamburguesas simples desea comprar?"));
        total += (cantidad * precio);
        unica = prompt("¿Será esta su compra final?").toLowerCase();
        if(unica == "si"){
            return;
        }
        else{
            continue;
        }
    }
}

for(let i = 0; i < vecesAComprar; i++){

    let comboPedido = prompt("Ingrese el nombre del combo que desea comprar \n1)Hamburguesa simple \n2)Hamburguesa doble \n3)Hamburguesa triple \n4)Hamburguesa clasica \n5)Hamburguesa de pollo \n6)Hamburguesa vegetariana").toLowerCase();

    function solicitarPedido (comboPedido, nombreCombo1, cantidadAComprar, totalVenta, precioCombo1, unicaCompra);

    function solicitarPedido (comboPedido, nombreCombo2, cantidadAComprar, totalVenta, precioCombo2, unicaCompra);

    function solicitarPedido (comboPedido, nombreCombo3, cantidadAComprar, totalVenta, precioCombo3, unicaCompra);

    function solicitarPedido (comboPedido, nombreCombo4, cantidadAComprar, totalVenta, precioCombo4, unicaCompra);

    function solicitarPedido (comboPedido, nombreCombo5, cantidadAComprar, totalVenta, precioCombo5, unicaCompra);

    function solicitarPedido (comboPedido, nombreCombo6, cantidadAComprar, totalVenta, precioCombo6, unicaCompra);
    
    
    else {
        alert("No tenemos ese tipo de hamburguesa");
    }
}

alert("El total de su compra es de $" + totalVenta)













/*if(comboPedido == nombreCombo1){

    cantidadAComprar = parseInt(prompt("¿Cuántas hamburguesas simples desea comprar?"));
    totalVenta += (cantidadAComprar * precioCombo1);
    unicaCompra = prompt("¿Será esta su compra final?").toLowerCase();
    if(unicaCompra == "si"){
        break;
    }
    else{
        continue;
    }
}

else if(comboPedido == nombreCombo2){
    cantidadAComprar = parseInt(prompt("¿Cuántas hamburguesas dobles desea comprar?"));
    totalVenta += (cantidadAComprar * precioCombo2);
    unicaCompra = prompt("¿Será esta su compra final?").toLowerCase();
    if(unicaCompra == "si"){
        break;
    }
    else{
        continue;
    }
}
else if(comboPedido == nombreCombo3){
    cantidadAComprar = parseInt(prompt("¿Cuántas hamburguesas triples desea comprar?"));
    totalVenta += (cantidadAComprar * precioCombo3);
    unicaCompra = prompt("¿Será esta su compra final?").toLowerCase();
    if(unicaCompra == "si"){
        break;
    }
    else{
        continue;
    }
}
else if(comboPedido == nombreCombo4){
    cantidadAComprar = parseInt(prompt("¿Cuántas hamburguesas clásicas desea comprar?"));
    totalVenta += (cantidadAComprar * precioCombo4);
    unicaCompra = prompt("¿Será esta su compra final?").toLowerCase();
    if(unicaCompra == "si"){
        break;
    }
    else{
        continue;
    }
}
else if(comboPedido == nombreCombo5){
    cantidadAComprar = parseInt(prompt("¿Cuántas hamburguesas de pollo desea comprar?"));
    totalVenta += (cantidadAComprar * precioCombo5);
    unicaCompra = prompt("¿Será esta su compra final?").toLowerCase();
    if(unicaCompra == "si"){
        break;
    }
    else{
        continue;
    }
}
else if(comboPedido == nombreCombo6){
    cantidadAComprar = parseInt(prompt("¿Cuántas hamburguesas vegetarianas desea comprar?"));
    totalVenta += (cantidadAComprar * precioCombo6);
    unicaCompra = prompt("¿Será esta su compra final?").toLowerCase();
    if(unicaCompra == "si"){
        break;
    }
    else{
        continue;
    }
}*\



