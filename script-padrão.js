fetch('script.js')
        .then(response => response.text())
        .then(body => {
            document.querySelector('.code-js').textContent = body
            hljs.highlightAll()
        })