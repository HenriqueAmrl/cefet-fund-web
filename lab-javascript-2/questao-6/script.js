function calculateAge(date) {
    let now = new Date
    let days = secondsToDays(now - date) - 1 // Desconsidera o dia atual
    return days >= 0 ? days : 0
}

function secondsToDays(seconds) {
    return (seconds / 86400000).toFixed()
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
    let days = calculateAge(date)
    output.textContent = `Você tem ${days} ${days == 1 ? 'dia' : 'dias'} de vida.`
})

// Só permite calcular caso a data tenha 10 caracteres
input.addEventListener('keyup', function() {
    if(this.value.length == 10) {
        calculate.disabled = false
    }
    else calculate.disabled = true
})