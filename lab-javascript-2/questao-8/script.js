function getWeeksRange(date1, date2) {
    let days = secondsToDays(now - date) - 1 // Desconsidera o dia atual
    let weeks = (days / 7).toFixed()
    return weeks >= 0 ? weeks : weeks * - 1
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


let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')
let output = document.querySelector('#output')
let calculate = document.querySelector('#calculate')

calculate.addEventListener('click', () => {
    let date1 = new Date(dateFormat(input1.value))
    let date2 = new Date(dateFormat(input2.value))
    if(date1 == 'Invalid Date' || date1 == 'Invalid Date') {
        alert('Digite uma data válida')
        input1.value = ''
        input2.value = ''
        return
    }
    output.textContent = getWeeksRange(date1, date2)
})

// Só permite calcular caso a data tenha 10 caracteres
input1.addEventListener('keyup', function() {
    if(this.value.length == 10 && input2.value.length == 10) {
        calculate.disabled = false
    }
    else calculate.disabled = true
})
input2.addEventListener('keyup', function() {
    if(this.value.length == 10 && input1.value.length == 10) {
        calculate.disabled = false
    }
    else calculate.disabled = true
})