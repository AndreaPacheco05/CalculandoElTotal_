// Definir el precio inicial 
precio = 400000;
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

cantidadSpan = document.querySelector(".cantidad");
totalPagar = document.querySelector(".valor-total");

// Incrementar
function sumar() {
    let cantidad = Number(cantidadSpan.innerHTML);
    cantidad +=1; 
    cantidadSpan.innerHTML = cantidad; 
    resultado(); 
}
// Disminuir
function restar() {
    let cantidad = Number(cantidadSpan.innerHTML);
    //No permite n<0
    if (cantidad > 0) {cantidad -= 1;}
    cantidadSpan.innerHTML = cantidad; 
    resultado();
}
// Total a pagar
function resultado() {
    cantidad = Number(cantidadSpan.innerHTML); 
    total = cantidad * precio; 
    totalPagar.innerHTML = total; 
}