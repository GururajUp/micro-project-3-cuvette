const display = document.getElementById('demo')

function displaynumber(input){
    display.value += input
}

function resetnumber(){
    display.value='0'
}
function calculatenumber(){
    display.value = eval(display.value)
}
function deleatenumber(){
    display.value=display.value.toString().slice(0,-1)
}
