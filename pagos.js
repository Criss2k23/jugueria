tarjeta = document.querySelector('#tarjeta'),
    btnAbrirFormulario = document.getElementById('#btn-abrir-formulario'),
    formulario = documet.querySelector('#formulario-tarjeta'),
    numeroTarjeta = document.querySelector('#tarjeta .numero'),
    nombreTarjeta = document.querySelector('#tarjeta .nombre'),
    logoMarca = document.querySelector('#logo-marca'),
    firma = document.querySelector('#tarjeta .firma p'),
    mesExpiracion = document.querySelector('#tarjeta #expiracion .mes'),
    añoExpiracion = document.querySelector('#tarjeta #expiracion .año');
    ccv = document.querySelector('#tarjeta .ccv');
    
    
// * Volteamos la tarjeta par aver el frente.
const mostrarFrente = () => {
   if(trjeta.classList.contains('active')){
       tarjeta.classList.remove('active');
   } 
}
    // * Rotacion de la Tarjeta 
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

// * Boton de abrir formulsrio
btnAbrirformulario.addEventListener('click', () => {
    btnAbrirformulario.classList.toggle('active');
    formulario.classList.toggle('active');
});
// * Select del dinamicamente.
for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selecMes.appendChild(opcion);
}



// * Select del año generado dinamicamente.
const añoActual = new Date().getFulAño();
for (let i = añoActual; i <= añoActual + 8; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectAño.appendChild(opcion);
}

// * Input numero de tarjeta 
formulario.inputNumero.addEventListener('Keyup', (e) => {
  let valorInput = e.target.value;

  formulario.input.value = valorInput
  // Eliminar espacios en blanco 
  .replace(/\s/g, '')
  // Eliminar las letras
  .replace(/\D/g, '')
  // Ponemos espacio cada cuatro numeros
  .replace(/([0-9]{4})/g,'$1 ')
  // Elimina el ultimo espaciado 
  .trim();

  numeroTarjeta.textContent = valorInput;

  if(valorInput == ''){
      numeroTarjeta.textContent = '#### #### #### ####';

      logoMarca.innerHTML = '';
  }

  if(valorInput[0] == 4 ){
    logoMarca.innerHTML = '';
      const imagen = document.createElement('img');
      imagen.src = 'img/logos/mastercard.png';
      logoMarca.appendChid(imagen);
  } else if(valorInput[0] == 5){
    
  }

  // Volteamos la tarjeta para que el  usuario vea el frente.
mostrarFrente();
});

// * Input nombre de tarjeta 
formulario.inputNombre.addEventListener('Keyup', (e) => {
   let valorInput =e.target.value;

   formulario.inputNombre.value = valorInput.replace(/[0-9]/g,'');
   nombreTarjeta.textContent = valorInput;
   firma.textContent = valorInput;

   if(valorInput == ''){
        nombreTarjeta.textContent = 'Jhon Doe';
   }

   mostrarFrente();
});

// * Select mes
formulario.selectMes.addEventListener('change', (e) =>{
   mesExpiracion.textContent = e.target.value;
   mostrarFrente();
});

// * Select Año
formulario.selectAño.addEventListener('change', (e) =>{
    añoExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();
 });

 // * ccv
 formulario.inputCCV.addEventListener('Keyup', () => {
    if(!tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active');
    }

    formulario.inputCCV.value = formulario.inputCCV.value
    // Eliminar los espacios
    .replace(/\s/g, '')
    // Eliminar las letras
    .replace(/\D/g, '');

    ccv.textContent =  formulario.inputCCV.value;
});