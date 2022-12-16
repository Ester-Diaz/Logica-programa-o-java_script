function trapezio(){
    var Bmaior = parseFloat(prompt("Informe o tamanho da base maior do trapézio"));
    var Bmenor = parseFloat(prompt("Informe o tamanho da base menor do trapézio"));
    var altura = parseFloat(prompt("Informe a altura do trapézio"));
    var trapezio = Bmaior+Bmenor;
    var multiplicação = trapezio*altura; 
    var divisão = multiplicação/2;
    alert("A aréa do trapézio é:"+divisão)
}