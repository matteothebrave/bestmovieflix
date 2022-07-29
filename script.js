var listaFilmes = [
  'https://upload.wikimedia.org/wikipedia/pt/d/de/Godfather_1972.jpg',
  'https://upload.wikimedia.org/wikipedia/pt/thumb/7/7c/GoodfellasPoster.jpg/250px-GoodfellasPoster.jpg',
  'https://upload.wikimedia.org/wikipedia/pt/a/a0/Casino_1995.jpg'
]

var linkFilmes = [
  'https://www.adorocinema.com/filmes/filme-1628/',
  'https://www.adorocinema.com/filmes/filme-5969/',
  'https://www.adorocinema.com/filmes/filme-14178/'
]

for (var i = 0; i < listaFilmes.length; i++) {
  document.write(
    '<a href=' +
      linkFilmes[i] +
      '>' +
      '<img src=' +
      listaFilmes[i] +
      '>' +
      '</a>'
  )
}

function adicionarFilme() {
  var filmeFavorito = document.getElementById('filme').value
  if (filmeFavorito.endsWith('.jpg')) {
    listarFilmesNaTela(filmeFavorito)
  } else {
    document.write('Endereço de filme inválido')
  }
  document.getElementById('filme').value = ''
}

function listarFilmesNaTela(filme) {
  var elementoFilmeFavorito = '<img src=' + filme + '>'
  var elementoListaFilmes = document.getElementById('listaFilmes')
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito
}

for (var i = 0; i < filmeFavorito.length; i++) {
  document.write('<img src=' + filmeFavorito[i] + '>' + '</a>')
}

function adicionarFilme() {
  var filmeFavorito = document.getElementById('filme').value
  if (filmeFavorito.endsWith('.jpg')) {
    listarFilmesNaTela(filmeFavorito)
  } else {
    alert('Endereço de filme inválido, precisa ser em .jpg')
  }
  document.getElementById('filme').value = ''
}

function listarFilmesNaTela(filme) {
  var elementoFilmeFavorito = '<img src=' + filme + '>'
  var elementoListaFilmes = document.getElementById('listaFilmes')
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito
}

for (var i = 0; i < filmeFavorito.length; i++) {
  document.write('<img src=' + filmeFavorito[i] + '>' + '</a>')
}

//como esse código funcionou eu não sei mas eu sei que funciona KKKKK boom boom
