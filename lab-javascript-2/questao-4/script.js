function countWords(string) {
    string = removeSpecialChars(string)
        .toLowerCase()
        .trim()

    let words = string.split(' ')
    let wordsObj = initializeObjectWithArrayAsKeys(words)

    words.forEach(word => {
        wordsObj[word]++
    });
    return wordsObj
}

function removeSpecialChars(string) {
    specialChars = ['+', '-', '&', '|', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ';', ':', '.', ',']

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

function frequentWord(string) {
    if (string.trim() == '') return ''
    wordsObj = countWords(string)
    let frequentestValue = 0
    let frequentestWord

    for (word in wordsObj) {
        let qtd = wordsObj[word]
        if (qtd > frequentestValue) {
            frequentestWord = word
            frequentestValue = qtd
        }
    }

    return `A palavra mais frequente foi <strong>${frequentestWord}</strong> e ela foi repetida <strong>${frequentestValue} ${frequentestValue == 1 ? 'vez' : 'vezes</strong>'}`
}

let input = document.querySelector('#input')
let output = document.querySelector('#output')

input.addEventListener('keyup', () => {
    output.innerHTML = frequentWord(input.value)
})