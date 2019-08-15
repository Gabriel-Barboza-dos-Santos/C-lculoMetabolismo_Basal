var peso = 0;
var idade = 0;
var altura = 0;
var resultado = 0;
var atividade = 0;

$(document).on("click","#resultado",function(){

idade = $("#idadeH").val(); 
peso = $("#pesoH").val(); 
altura = $("#alturaH").val(); 
atividade = $("#atividade").val(); 
resultado = $("#resultado").val();

resultado = atividade * (66 + ((13.7 * peso) + (5 * altura) - (6.8 * idade)));
$("#visor").val(resultado);
});