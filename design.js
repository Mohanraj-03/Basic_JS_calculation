var a1 =parseInt(prompt("Enter a first number"));
var a2 = parseInt(prompt("Enter a second number"));
var op = prompt("Enter the operator");
switch(op){
    case '+':document.getElementById("result").textContent=(a1+a2);break;
    case '-':document.getElementById("result").textContent=(a1-a2);break;
    case '*':document.getElementById("result").textContent=(a1*a2);break;
    case '/':document.getElementById("result").textContent=(a1/a2);break;
    default:document.getElementById("result").textContent=("Enter a correct operator");break;
}
