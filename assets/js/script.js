
var guarda;
function calculo(){

    var peso =  parseFloat(document.getElementById("entrada2").value.replace(',','.'));
    var altura = parseFloat(document.getElementById("entrada1").value.replace(',','.'));

    var imc =   peso / (altura * altura);
    var resultado = `Seu IMC é de ${imc.toFixed(3)}`;
    document.getElementById("resultado").value = resultado;
    /* 
    document.querySelector("entrada1").disable = true
    document.querySelector("entrada2").disable = true    
    setTimeout(() => document.getElementsByClassName(elemento).disabled = false, 2000);
    setTimeout(() => document.getElementsByClassName(elemento).disabled = false, 2000); */
    resetar(); 
    
   if(imc < 18.5){
    document.getElementById("nivel1").classList.add('table-warning');
  } else if(imc >= 18.5 && imc < 25){
    document.getElementById("nivel2").classList.add('table-success');
  }else if(imc >= 25.0 && imc < 30){
    document.getElementById("nivel3").classList.add('table-info');
  }else if(imc >= 30.0 && imc < 40){
    document.getElementById("nivel4").classList.add('table-warning');
  }else{
    document.getElementById("nivel5").classList.add('table-danger');
}
}

function resetar(){
  document.getElementById("nivel1").classList.remove('table-warning');
  document.getElementById("nivel2").classList.remove('table-success');
  document.getElementById("nivel3").classList.remove('table-info');
  document.getElementById("nivel4").classList.remove('table-warning');
  document.getElementById("nivel5").classList.remove('table-danger');
}


/* ---------- */

