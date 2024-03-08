let numeros = [0,1,2,3,4,5,6,7,8,9,10];
 console.log(numeros);
 numeros.push(11);
 console.log(numeros);
 numeros.unshift(12);
 console.log(numeros);
 const lista = numeros.concat([13,14,15]);
 console.log(lista);
 lista.splice(13,15);
 console.log(lista);
 lista.shift();
 console.log(lista);
 const posicion= lista.findIndex((item)=>{
    return item ===5;
 });
 lista.splice(posicion,1);
 console.log(lista);
 
 const par = lista.find((value)=>(value % 2)===0);
 console.log(par);

 const numerospares = lista.filter((value)=>(value % 2)===0);
 console.log(numerospares);
 const listaOrden = lista.sort((a,b)=>{
    return b-a;
 });

 console.log(listaOrden);

 const transPares=numerospares.map((value,index)=>{
            return"El numero par " + index +"es" +value;
 });
 console.log(transPares);

 function mostrarMsg(){
   // alert("hola mundo ");
   //document.getElementById("tituloh1").innerHTML = "hola <i>mundo<i/> " ;
   const titulo = document.getElementById("tituloh1");
   titulo.style.color = " #00f2f8 ";
   titulo.innerHTML="hola <i> mundo </i>!!!";
 };