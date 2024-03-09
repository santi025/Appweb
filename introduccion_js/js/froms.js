const saludarBtn =document.getElementById("saludarBtn");
saludarBtn.addEventListener("click", ()=>{
    const from = document.forms['saludarForm'];
    const nombreInput =from['nombre'];
    const nombreValue = nombreInput.value;
    const nombreError = document.getElementById('nombreError');
    if (!nombreValue){
        //alert('Debe ingresar el nombre');
        nombreError.classList.add('mostrarError');
    }else{
    nombreError.classList.remove('mostrarError');
    const parrafo = document.getElementsByTagName('p');
    console.log(parrafo);
    parrafo[0].innerText = 'hola ' + nombreInput.value + ' !!!!!!';

    }

    //console.log(nombreInput.value);

    
});
document.getElementById('nombreInp').addEventListener('keyup', ()=>{
    const from = document.forms['saludarForm'];
    const nombreInput = from['nombre'];
    const nombreValue = nombreInput.value;
    if(!nombreValue){  return; }
    const nombreLetrasError = document.getElementById('nombreLetrasError');
    if(nombreValue.includes('1'))
    {
        nombreLetrasError.classList.add('mostrarError');

    }else{
        nombreLetrasError.classList.remove('mostrarError');
    }

});