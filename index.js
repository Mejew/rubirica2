const listPersonaje = [];
function consultar() {
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      for (let index = 0; index < 18; index++) {
        const { id, name, image } = data.results[index];
        listPersonaje.push({ id, name, image })
      }
      listarTodos();
    });
}

const listarTodos = () => {
  const cardContainer = document.querySelector('.container');
  const list = document.getElementById('floatingSelect');
  let opciones = `<option selected value=19>All Personajes</option>`;
  cardContainer.innerHTML = "";
  for (let i = 0; i < 18; i++) {
    const character = listPersonaje[i];
    const card = document.createElement('div');
    //añado los elementos a la lista
    opciones += `<option value="${i}">${character.name}</option>`
    list.innerHTML = opciones;
    //creo la tarjeta
    card.classList.add('card');
    card.id = 'card';
    //agrego la imagen
    const image = document.createElement('img');
    image.src = character.image;
    image.alt = character.name;
    //agrego el nombre del personaje
    const name = document.createElement('h2');
    name.textContent = character.name;
    //le agrego la imagen y el nombre a la tarjeta
    card.appendChild(image);
    card.appendChild(name);
    //agrego la tarjeta al contenedor
    cardContainer.appendChild(card);
  }
}

const Listar = (count) => {
  const cardContainer = document.querySelector('.container');
  cardContainer.innerHTML = "";
  const character = listPersonaje[count];
  if (!character) {
    listarTodos()
  } else {
    console.log(character);
    const card = document.createElement('div');
    //creo la tarjeta
    card.classList.add('card');
    card.id = 'card';
    //agrego la imagen
    const image = document.createElement('img');
    image.src = character.image;
    image.alt = character.name;
    //agrego el nombre del personaje
    const name = document.createElement('h2');
    name.textContent = character.name;
    //le agrego la imagen y el nombre a la tarjeta
    card.appendChild(image);
    card.appendChild(name);
    //agrego la tarjeta al contenedor
    cardContainer.appendChild(card);
  }
};

consultar();