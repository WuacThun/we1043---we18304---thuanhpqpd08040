function cong(a,b){
    return a +b;
}
function tru(a,b){
    return a -b;
}
function nhan(a,b){
    return a *b;
}
function chia (a,b){
    if (b == 0 ){
        return "không chia cho 0 được";
    }
    return a /b;
}
let num1 = parseFloat(prompt("Nhập số thứ nhất:"));
let num2 = parseFloat(prompt("Nhập số thứ hai:"));
let dau = prompt("Nhập phép tính (+, -, *, /):");
let result;
switch (operator) {
  case "+":
    result = add(num1, num2);
    break;
  case "-":
    result = subtract(num1, num2);
    break;
  case "*":
    result = multiply(num1, num2);
    break;
  case "/":
    result = divide(num1, num2);
    break;
  default:
    result = "Phép tính không hợp lệ";
}
alert("kết quả= "+ result );
