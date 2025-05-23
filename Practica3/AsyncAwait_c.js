function simularPeticionAPI(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve ("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    // usar await para esperar la promesa de simularpeticion
    console.log("Llamada a la API...");
    const resultado = await simularPeticionAPI();
    console.log("Resultado recibido", resultado);  //imprimir el resultado
    
}

//mandar a llamar async para ver el resultado
obtenerDatos();