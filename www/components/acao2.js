// This is a JavaScript file
var peso = 0;
var idade = 0;
var altura = 0;
var resultado = 0;
var atividade = 0;


$(document).on("click","#resultado",function(){
idade = $("#idadeF").val(); 
peso = $("#pesoF").val(); 
altura = $("#alturaF").val(); 
atividade = $("#atividade").val(); 
resultado = $("#resultado").val();

resultado = atividade * (655 + ((9.6 * peso) + (1.8 * altura) - (4.7 * idade)));
$("#visor").val(resultado);
});