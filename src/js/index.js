
const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonsCards = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value
        const idCardSelecionado = 'card-' + idPokemonSelecionado
        const cartaoPokemonAbrir = document.getElementById(idCardSelecionado)
        cartaoPokemonAbrir.classList.add('aberto')

        const listaPokemonAnterior = document.querySelector('.ativo')
        listaPokemonAnterior.classList.remove('ativo')
        listaPokemonAnterior.classList.add('desativado')
        const listaPokemonPosterior = document.getElementById(idPokemonSelecionado)
        listaPokemonPosterior.classList.add('ativo')
        listaPokemonPosterior.classList.remove('desativado')

    })
})

