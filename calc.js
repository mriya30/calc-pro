function calc(num){
    document.querySelector('#res').value += num
}
function output(){
    var inValue=document.querySelector('#res')
    console.log(inValue.value)
    var finalOutput = eval(inValue.value)
    inValue.value=finalOutput
}
function clearAll(){
    document.querySelector('#res').value = ""
}
function lastDelete(){
    var inValue=document.querySelector('#res')
    inValue.value=inValue.value.slice(0,-1)
}
