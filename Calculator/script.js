let number = document.getElementById('number');
let value =0;

function incrementBy1(){
    value++;
    updateValue()
}

function incrementBy7(){
    value=value+7;
    updateValue()
}

function decrementBy1(){
    value--;
    updateValue()
}
function decrementBy7(){
    value=value-7;
    updateValue()
}

function updateValue(){
    number.textContent =value;
}