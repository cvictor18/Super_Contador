var botão = document.getElementById('botão')
botão.addEventListener('click', clicar)
function clicar() {
    var i = document.getElementById('inicio').value
    var f = document.getElementById('fim').value
    var p = document.getElementById('passo').value
    var res = document.getElementById('resultado')
    res.innerHTML = `Contando:<br>`
    if (i.length == 0 || f.length == 0) {
        res.innerHTML = `Impossível contar!`
    } else {
        if (p == 0) {
            window.alert(`Passo Inválido! Considerando Passo 1`)
            p = 1
        }
        i = Number(i)
        f = Number(f)
        p = Number(p)
        if (i < f) {
            while (i <= f) {
                res.innerHTML += ` ${i} &#128073 `
                i += p
            }    
        } else {
            while (i >= f) {
                res.innerHTML += ` ${i} &#128073`
                i -= p
            }
        }
        res.innerHTML += ` &#9989` 
    }
}

