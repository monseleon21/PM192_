let nombre = "Monse";
let edad = "22";

const saludoPersonalizado = (nombre, edad) => 'Hola, me llamo ' + nombre + 
' y tengo ' +edad +' años.';
console.log(saludoPersonalizado(nombre, edad));

//arrow function llamado saludo personalizado que pueda recibir dos parametros nombre y edad y retorne una cadena: "Hola me llamo Monse y tengo 37 años"