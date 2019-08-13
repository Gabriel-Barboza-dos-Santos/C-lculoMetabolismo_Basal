$(document).on("click","#resultado",function(){

var peso;
var altura;
var nivel;
var resultado;
var calcular;

idade = $("#idadeH").val(); 
peso = $("#pesoH").val(); 
altura = $("#alturaH").val(); 
atividade = $("#atividade").val(); 
resultado = $("#resultado").val();

$resultado = atividade * (66 + ((13,7 * peso) + (5 * altura) - ( 6.8 * idade)));
$("#visor").val (resultado);

});

