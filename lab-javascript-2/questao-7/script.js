function dateToString(date) {
    months = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro'
    ]

    // Usando os métodos UTC para não alterar a data de acordo com o GMT
    return `${date.getUTCDate()} de ${months[date.getUTCMonth()]} de ${date.getUTCFullYear()}`
}

function dateFormat(string) {
    let day = string.substring(0, 2)
    let month = string.substring(3, 5)
    let year = string.substring(6, 10)
    return `${year}-${month}-${day}`
}



let input = document.querySelector('#input')
let output = document.querySelector('#output')
let calculate = document.querySelector('#calculate')

calculate.addEventListener('click', () => {
    let date = new Date(dateFormat(input.value))
    if(date == 'Invalid Date') {
        alert('Digite uma data válida')
        input.value = ''
        return
    }
    output.textContent = dateToString(date)
})

// Só permite calcular caso a data tenha 10 caracteres
input.addEventListener('keyup', function() {
    if(this.value.length == 10) {
        calculate.disabled = false
    }
    else calculate.disabled = true
})