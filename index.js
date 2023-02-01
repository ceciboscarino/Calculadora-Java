const txtOp1 = document.getElementById("op1")
const txtOperador = document.getElementById("operador")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

//btnCalcular.addEventListener("click",calcular) ya esta hecho la funcion en html

function calcularFun(){
    const operador = txtOperador.value 
    const op1 = parseFloat(txtOp1.value) 
    const op2 = parseFloat(txtOp2.value)  

    if((operador == "+" || operador == "-" || operador == "*" || operador == "/") && !isNaN(op1) && !isNaN(op1)  ){
        let resultado;
        switch (operador){
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2
                break;
        }
        pResultado.style = "color:black"
        
        pResultado.innerText = "=" + resultado
    }else{
        pResultado.style = "color:red"

        pResultado.innerText = "calculo imposible"

    }
     
}


