function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var loa = window.document.getElementById('loading')
    var date = new Date()
    var hora = date.getHours()
    var minutos = date.getMinutes()
    msg.innerText = `Agora são ${hora}hrs e ${minutos}minutos`
    if (hora >= 0 && hora < 12) {
        img.innerHTML = `<p>BOM DIA!!</p>`
        loa.src = './assets/fotomanha.jpg'
        document.body.style.background = 'rgb(255, 249, 136)'
    } else if (hora >= 12 && hora < 18) {
        img.innerHTML = `<p>BOA TARDE!!</p>`
        loa.src = './assets/fototarde.jpg'
        document.body.style.background = 'rgb(160, 83, 0)'
    } else {
        img.innerHTML = `<p>BOA NOITE!!</p>`
        loa.src = './assets/fotonoite.jpeg'
        document.body.style.background = 'rgb(54, 53, 53)'
    }
}