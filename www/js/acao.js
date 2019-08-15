$(document).on("click","#calcular",function(){

var peso;
var altura;
var nivel;
var resultado;
var calcular;

idade = $("#idadeH").val(); 
peso = $("#pesoH").val(); 
peso = $("#pesoH").val(); 
atividade = $("#atividade").val(); 
calcular = $("#calcular").val();

$resultado = $nivel * (66 + ((13.7 * $peso) + (5 *altura) - ( 6.8 * $idade)));
$("#visor").val ($resultado);
});