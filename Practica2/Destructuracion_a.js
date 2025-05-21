const persona = {
    nombre: "Maria Monserrat Campuzano Leon",
    edad: 22,
    direccion: {
    ciudad: "Qro",
    pais: "MX"
    }
};

// aplica destructuración 
const {nombre, edad, direccion: {ciudad} }= persona;

// imprime el mensaje 
console.log(`Me llamo ${nombre} tengo ${edad} y vivo en ${ciudad}`);