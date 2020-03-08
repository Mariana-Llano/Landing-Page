let numero = document.getElementById('num');
let boton = document.getElementById('btn');

boton.addEventListener('click', meses);


function meses(){
   let num = numero.value;
  if(num == 1 ){
      console.log('Enero');
  }else if(num == 2){
    console.log('Febrero');
  }
}

