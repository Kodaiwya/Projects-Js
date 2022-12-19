function sum() {
    var nbr1 = document.getElementById('nb1')
    var nbr2 = document.getElementById('nb2')
    var res = document.getElementById('res')
    var n1 = Number(nbr1.value)
    var n2 = Number(nbr2.value)
    var s = n1 + n2
    res.innerHTML = `O valor da Soma de ${n1} e ${n2} é ${s}`
}
function sub() {
    var nbr3 = document.getElementById('nb3')
    var nbr4 = document.getElementById('nb4')
    var res2 = document.getElementById('res2')
    var n3 = Number(nbr3.value)
    var n4 = Number(nbr4.value)
    var s = n3 - n4
    res2.innerHTML = `O valor da Subtração de ${n3} e ${n4} é ${s}`
}