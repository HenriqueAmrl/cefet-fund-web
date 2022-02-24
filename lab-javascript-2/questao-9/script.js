function containsUpperLowerCase(string) {
    let containsUpperCase = string.toLowerCase() != string
    let containsLowerCase = string.toUpperCase() != string
    return containsUpperCase && containsLowerCase
}

function containsNumbers(string) {
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    for (let i = 0; i < string.length; i++)
        if (numbers.includes(string[i]))
            return true

    return false
}

function containsSpecialChars(string) {
    let specialChars = ['@', '#', '!', '$', '%', '&', '*', '(', ')', '-', '+', '.', '=']
    for (let i = 0; i < string.length; i++) {
        if (specialChars.includes(string[i]))
            return true
    }
    return false
}

let password = document.querySelector('#password')

password.addEventListener('keyup', function () {
    let checked = 0
    if (this.value.length != 0) {
        checked += containsUpperLowerCase(this.value) ? 1 : 0
        checked += containsNumbers(this.value) ? 2 : 0
        checked += containsSpecialChars(this.value) ? 4 : 0
    }

    switch (checked) {
        case 1:
        case 5:
            this.style.borderColor = 'red'
            break
        case 3:
            this.style.borderColor = 'orange'
            break
        case 7:
            this.style.borderColor = 'green'
            break
        default:
            this.style.borderColor = 'unset'
    }
})
