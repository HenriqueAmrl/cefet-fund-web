$.get('https://rafaelescalfoni.github.io/desenv_web/filmes.json', response => {

    function renderArticle(movie) {
        let template = `
    <article class="movie">

    <header class="movie__header">
        <img class="movie__image" src="">
        <div class="movie__info">
            <h3 class="movie__title"></h3>
            <p class="movie__genres">

            </p>

            <p class="movie__cast"></p>

            <div class="movie__rating-wrapper">
                <div class="movie__rating-age"></div>
                <div class="movie__rating-review">

                </div>
            </div>
        </div>

    </header>

    <div class="movie__body">
        <p class="movie__description"></p>
        <div class="movie__related">
            <h4>Títulos relacionados</h4>

        </div>

    </div>

    </article>
    `
        let article = $(template)

        article.find('.movie__image')
            .attr('src', movie.figura)

        article.find('.movie__title')
            .text(movie.titulo)

        article.find('.movie__genres')
            .text(movie.generos.join(', '))

        article.find('.movie__cast')
            .text('Elenco: ' + movie.elenco.join(', '))

        // ---------- Classificação indicativa ----------
        let color
        if (movie.classificacao <= 14)
            color = 'green'
        else if (movie.classificacao < 18)
            color = 'yellow'
        else
            color = 'red'

        article.find('.movie__rating-age')
            .text(movie.classificacao > 0 ? movie.classificacao : 'Livre')
            .css('background-color', color)

        // ---------- Avaliações ----------
        // Calculando a média
        let avg = 0
        movie.opinioes.forEach(review => {
            avg += review.rating
        })
        avg = (avg / movie.opinioes.length).toFixed()

        // Adicionando imagens das estrelas
        let stars = []
        for (let i = 1; i <= 5; i++) {
            let state = i <= avg ? 'preenchida' : 'vazia'

            stars.push(
                $('<img>')
                    .attr('src', `img/estrela-${state}.png`)
                    .attr('width', '15px')
            )
        }

        article.find('.movie__rating-review')
            .append(stars)

        article.find('.movie__description')
            .text(movie.resumo)


        let related = response.filter(content => movie.titulosSemelhantes.includes(content.id))
        let relatedImg = []
        related.forEach(relatedMovie => relatedImg.push(
            $('<img>')
                .attr('src', relatedMovie.figura)
        ))


        article.find('.movie__related')
            .append(relatedImg)


        return article
    }

    let content = $('#content')

    response.forEach(movie => {
        content.append(renderArticle(movie))
    });

})



