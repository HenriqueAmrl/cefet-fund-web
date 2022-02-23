function replaceText(text, search, replace, caseSensitive) {
    if(caseSensitive) {
        text = text.replaceAll(search, replace)
    }
    else {
        search = search.toLowerCase()
        while(text.toLowerCase().includes(search)) {
            let {start, end} = getLimitIndexesOfString(text.toLowerCase(), search)
            text = text.substring(0, start) + replace + text.substring(end)
        }
    }

    return text
}

function getLimitIndexesOfString(string, substring) {
    start = string.indexOf(substring)
    end = start + substring.length

    return {
        start: start,
        end: end
    }
}


let replaceAll = document.querySelector('#replace-all')
let textArea = document.querySelector('#text')

replaceAll.addEventListener('click', () => {
    let text = textArea.value
    let search = document.querySelector('#search').value
    let replace = document.querySelector('#replace').value
    let caseSensitive = document.querySelector('#case-sensitive').checked

    textArea.value = replaceText(text, search, replace, caseSensitive)
})