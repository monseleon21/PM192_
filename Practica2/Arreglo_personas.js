const productos = [
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mouse ", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000},
];

// filtro
const mayormil = productos.filter(producto => producto.precio >1000);

// map
const nombres = mayormil.map(producto => producto.nombre);

console.log(nombres);


