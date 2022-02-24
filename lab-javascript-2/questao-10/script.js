function textReplace(string) {
    for(let i = 0; i < 5; ++i) {
        string = string.replaceAll('tenis'[i], 'polar'[i])
        string = string.replaceAll('TENIS'[i], 'POLAR'[i])
    }

    return string
}

let input = document.querySelector('#input')
let output = document.querySelector('#output')

input.addEventListener('keyup', () => {
    output.textContent = textReplace(input.value)
})
