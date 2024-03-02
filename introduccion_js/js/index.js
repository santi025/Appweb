var nombre ="pepe ";
let apellido ="perez";
const numero = 12;
apellido ="gomez";
let numeroDos = 12.36;
let datoBolleano =  true;
let pares = [2,4,6,8];
let jobs = ["libro","deporte","cine"];
console.log(pares[2]);
let persona ={
    nombre:"juan",
    apellido:"perez",
    edad: 28,
    jobs:["librp","dormir"],
    otros:{
        telefonos:1234,
        email:"test@test.com"
    }
};
console.log(persona["nombre"],persona.nombre);
console.log(persona.jobs[1], persona.otros.email);
const personas =[
    {nombre:"persona1", edad:17, categoria:"a"},
    {nombre:"persona2", edad:27, categoria:"b"},
    {nombre:"persona3", edad:37, categoria:"c"},
    {nombre:"persona4", edad:47, categoria:"d"},
    {nombre:"persona5", edad:57, categoria:"e"}
];
console.log("for------------------");
for(let index=0;index < personas.length-1;index++){
    console.log(personas[index].nombre);

}

console.log("for in ------------------------------");
for(let index in personas){
    console.log (personas[index].nombre);

}
console.log("for of ------------------------------");
for(let item of personas){
    console.log(item.nombre);

}

console.log("while ------------------------------");
let index =0;
while ( index<personas.length){
    console.log(personas[index].nombre);
    index++;

}
console.log("while ------------------------------");
index=0;
do{
    console.log(personas[index].nombre);
    index ++;
}while(index < personas.length);

console.log("foreach------------------------------");
personas.forEach((item, index)=>{
    console.log(index, item.nombre);
});

let m = "12";
if(m===12){
    console.log(m,"ok");
}else if(m<=12){
    console.log(m,"menos 1");
}else{
    console.log(m,"not");
}

/**
 * ! negacion
 * == igual valor
 * === igual valor tipo
 * || or
 * && and 
 * != diferente 
 */