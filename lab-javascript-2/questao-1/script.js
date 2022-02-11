function stringReverse(string) {
    let reverse = ''

    for(let i = 1; i <= string.length; ++i) {
        reverse += string[string.length - i]
    }

    return reverse
}

let input = document.querySelector('#input')
let output = document.querySelector('#output')

input.addEventListener('keyup', () => {
    let reverse = stringReverse(input.value)
    output.textContent = reverse
})