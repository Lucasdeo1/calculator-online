
function add() {
    var tx1 = window.document.getElementById('txt1')
    var tx2 = window.document.getElementById('txt2')
    var res = window.document.getElementById('res')
    var n1 = Number(tx1.value) 
    var n2 = Number(tx2.value)
    var a = n1 + n2
    res.innerHTML = `The add of ${n1} and ${n2} is ${a}`
}

function sub(){
    var tx1 = window.document.getElementById('txt1')
    var tx2 = window.document.getElementById('txt2')
    var res = window.document.getElementById('res')
    var n1 = Number(tx1.value) 
    var n2 = Number(tx2.value)
    var a = n1 - n2
    res.innerHTML = `The subtraction of ${n1} and ${n2} is ${b}`
}

function mult() {
    var tx1 = window.document.getElementById('txt1')
    var tx2 = window.document.getElementById('txt2')
    var res = window.document.getElementById('res')
    var n1 = Number(tx1.value) 
    var n2 = Number(tx2.value)
    var a = n1 * n2
    res.innerHTML = `The multiplication of ${n1} and ${n2} is ${a}`
}

function divi() {
    var tx1 = window.document.getElementById('txt1')
    var tx2 = window.document.getElementById('txt2')
    var res = window.document.getElementById('res')
    var n1 = Number(tx1.value) 
    var n2 = Number(tx2.value)
    var a = n1 / n2
    res.innerHTML = `The division of ${n1} and ${n2} is ${a}`
}