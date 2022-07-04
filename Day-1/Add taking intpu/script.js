function add(){
    var _firstNumber = document.getElementById('firstNumber').value;
    var _secondNumber = document.getElementById('secondNumber').value;
    var _result = parseInt(_firstNumber) + parseInt(_secondNumber);
    document.getElementById('result').value = _result;
}