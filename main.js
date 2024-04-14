const doseDisponivel = document.getElementById('doseDisponivel');
const dosePrescrita = document.getElementById('dosePrescrita');
const volDiluente = document.getElementById('volDiluente');
const resultado = document.getElementById('resultadoCalculo');

function calcular(event) {    
    resultado.innerHTML += ( " A dose final é : " + parseFloat((dosePrescrita.value) * parseFloat(volDiluente.value)) / parseFloat(doseDisponivel.value) + " mg ou ml...")
    event.preventDefault()
}