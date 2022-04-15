var checkbox = document.getElementById('game');
checkbox.addEventListener("change", validaCheckbox, false);
function validaCheckbox()
{
  var checked = checkbox.checked;
  if(checked){
    alert('checkbox1 esta seleccionado');
  }
}