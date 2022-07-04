function counter1(){
    var _value = document.getElementById('counter').value;
    _value ++;
    document.getElementById('counter').value = _value
    
}
function counter2(){
    var _value = document.getElementById('counter').value;
    if(_value <= 0){
        _value = 0;
    }
    else{
        _value --;
        document.getElementById('counter').value = _value
    
}
}