function countWords(string) {
    string = removeSpecialChars(string)
        .toLowerCase()
        .trim()

    if(string == '') return ''

    let words = string.split(' ')
    let wordsObj = initializeObjectWithArrayAsKeys(words)

    words.forEach(word => {
        wordsObj[word]++
    });
    return wordsObj
}

function removeSpecialChars(string) {
    specialChars = ['+', '-', '&', '|', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?',';', ':', '.', ',']

    specialChars.forEach(char => {
        string = string.replaceAll(char, '')
    });
    return string
}

function initializeObjectWithArrayAsKeys(array) {
    obj = {}

    array.forEach(key => {
        obj[key] = 0
    })
    return obj
}

function objectToTable(obj) {
    let htmlData = ''
    for (key in obj) {
        htmlData += `
        <tr>
            <th>${key}</th>
            <td>${obj[key]}</td>
        </tr>
        `
    }

    let html = `
    <table>
        <tr>
        <th>Palavra</th>
        <th>Repetições</th>
        </tr>
        ${htmlData}
    </table>
    `

    return html
}

let input = document.querySelector('#input')
let output = document.querySelector('#output')

input.addEventListener('keyup', () => {
    let countedWords = countWords(input.value)
    output.innerHTML = objectToTable(countedWords)
})