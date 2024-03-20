function dudu() {
    let data = document.getElementById('data').value
    let dataNas = new Date(data)
    let res = document.getElementById('res')

    let hoje = new Date()

    let idade = hoje.getFullYear() - dataNas.getFullYear
    let mes = hoje.getMonth() - dataNas.getMonth

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNas.getDate())) {
        idade--
    }
    res.innerHTML = `vc tem: ${idade}`
}