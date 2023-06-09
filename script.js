var botão = document.getElementById('botão')
botão.addEventListener('click', clicar)
function clicar() {
    var i = document.getElementById('inicio').value
    var f = Number(document.getElementById('fim').value)
    var p = Number(document.getElementById('passo').value)
    var res = document.getElementById('resultado')
    res.innerHTML = `Contando:<br>`
    if (i.length == 0 || Number(i) > f) {
        res.innerHTML = `Impossível contar!`
    } else {
        if (p == 0) {
            window.alert(`Passo Inválido! Considerando Passo 1`)
            p = 1
        }
        i = Number(i)
        while (i <= f) {
            res.innerHTML += ` ${i} &#128073 `
            i = i + p
            if (i > f) {
                res.innerHTML += `&#9989`
            }
        } 
    }
}

