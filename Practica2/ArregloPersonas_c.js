const personas =[
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}
];


// busca a Luis .find
const buscLuis = personas.find(persona => persona.nombre === "Luis" ); 
 console.log(buscLuis);

// imprimir el nombre de cada persona con la edad 
personas.forEach(persona => {
    console.log(`${persona.nombre}, ${persona.edad}`);
}); 


// .reduce para sumr todas las edades y obtener un total
const totaledades = personas.reduce((total, persona)=>{
    return total + persona.edad;},0);

console.log(`Total de edades: ${totaledades}`); 