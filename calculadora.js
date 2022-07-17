
function suma(n1,n2){
	
	alert(n1+n2);
}

function resta(n1,n2){
	
	alert(n1-n2);
}

function multiplicacion(n1,n2){
	
	alert(n1*n2);
}

function division(n1,n2){
	
	alert(n1/n2);
}

alert("calculadora de ensallo,escribe salir para no continuar con la operacion ");
var operacion=prompt("operacion a realizar:suma,restar,multiplicar,division");

while(operacion != "salir"){
	
		var num1=parseInt(prompt("primer numero"));
		var num2=parseInt(prompt("segundo numero"));

switch(operacion){
		
		
		
	case "suma":
		suma(num1,num2);

		break;
	case "resta":
		resta(num1,num2);

		break;
	case "multiplicacion":
		multiplicacion(num1,num2);


		break;
	case "division":

		division(num1,num2);
		break;
	default:
		alert("la operacion  no esta contemplada");
		break;


}
operacion=prompt("operacion a realizar suma,restar,multiplicar,division");
}




