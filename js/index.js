
function Combo (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const combo1 = new Combo ("hamburguesa simple", 650)
const combo2 = new Combo ("hamburguesa doble", 750)
const combo3 = new Combo ("hamburguesa triple", 850)
const combo4 = new Combo ("hamburguesa clasica", 650)
const combo5 = new Combo ("hamburguesa de pollo", 700)
const combo6 = new Combo ("hamburguesa vegetariana", 600)

const listaDeCombos = [combo1, combo2, combo3, combo4, combo5, combo6];

let cantidadAComprar;
let totalVenta = 0;
let combosAComprar = parseInt(prompt("Ingrese la cantidad de combos distintos que desea comprar:"));

function solicitarPedido (combo, nombre, cantidad, total, precio) {

    if(combo == nombre){
        cantidad = parseInt(prompt("¿Cuántas hamburguesas del combo elegido desea comprar?"));
        total += (cantidad * precio);
    }
}

function productoNoExistente () {
    alert("No tenemos ese tipo de hamburguesa")
}

for (let i = 0; i < combosAComprar; i++){

    let comboPedido = prompt("Ingrese el nombre del combo que desea comprar \n 1) Hamburguesa simple: $650 \n 2) Hamburguesa doble: $750\n 3) Hamburguesa triple: $850 \n 4) Hamburguesa clasica: $650 \n 5) Hamburguesa de pollo: $700 \n 6) Hamburguesa vegetariana: $600").toLowerCase();
    
    solicitarPedido (comboPedido, listaDeCombos[0].nombre, cantidadAComprar, totalVenta, listaDeCombos[0].precio);

    solicitarPedido (comboPedido, listaDeCombos[1].nombre, cantidadAComprar, totalVenta, listaDeCombos[1].precio);

    solicitarPedido (comboPedido, listaDeCombos[2].nombre, cantidadAComprar, totalVenta, listaDeCombos[2].precio);

    solicitarPedido (comboPedido, listaDeCombos[3].nombre, cantidadAComprar, totalVenta, listaDeCombos[3].precio);

    solicitarPedido (comboPedido, listaDeCombos[4].nombre, cantidadAComprar, totalVenta, listaDeCombos[4].precio);

    solicitarPedido (comboPedido, listaDeCombos[5], cantidadAComprar, totalVenta, listaDeCombos[5].precio);
    
    if ((comboPedido != combo1.nombre) && (comboPedido != combo2.nombre) && (comboPedido != combo3.nombre) && (comboPedido != combo4.nombre) && (comboPedido != combo5.nombre) && (comboPedido != combo6.nombre)) {
        productoNoExistente ()
    }

}

alert("El total de su compra es de $" + totalVenta) 


