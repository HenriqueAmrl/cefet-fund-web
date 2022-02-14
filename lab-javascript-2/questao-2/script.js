function scoreVowels(string) {
    let scored = ''
    let vowels = ['a', 'e', 'i', 'o', 'u']

    for(let i = 0; i < string.length; ++i) {
        let letter = string[i]

        scored += vowels.includes(letter.toLowerCase()) ? `<strong>${letter}</strong>` : letter
    }

    return scored
}

let input = document.querySelector('#input')
let output = document.querySelector('#output')

input.addEventListener('keyup', () => {
    let scored = scoreVowels(input.value)
    output.innerHTML = scored
})
