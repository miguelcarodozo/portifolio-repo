const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input")
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonW = document.getElementById("weight");
const pokemonH = document.getElementById("height");
const pokemonHP = document.getElementById("hp");
const pokemonAtt = document.getElementById("attack");
const pokemonD = document.getElementById("defense");
const pokemonSA = document.getElementById("special-attack");
const pokemonSD = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed")
const types = document.getElementById("types");
const spriteContainer = document.getElementById('sprite-container');

const fetchData = async (data) => {
  try {
    const pokemonNameOrId = searchInput.value.toLowerCase();
    const res = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`
    );
    const data = await res.json();
    pokemonName.textContent = `${data.name}`
    pokemonHP.textContent = data.stats[0].base_stat;
    pokemonAtt.textContent = data.stats[1].base_stat;
    pokemonD.textContent = data.stats[2].base_stat;
    pokemonSA.textContent = data.stats[3].base_stat;
    pokemonSD.textContent = data.stats[4].base_stat;
    pokemonSpeed.textContent = data.stats[5].base_stat
    pokemonId.textContent = `#${data.id}`
    pokemonW.textContent = `Weight: ${data.weight}`
    pokemonH.textContent = `Height: ${data.height}`
    types.innerHTML = data.types
      .map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`)
      .join('');
    spriteContainer.innerHTML = `<img src="${data.sprites.front_default}" id="sprite">`
  }
  catch (err) {
    alert(`Pokemon not found`)
    resetDisplay();
  }
};
const resetDisplay = () => {
  pokemonName.textContent = ``
  pokemonHP.textContent = ""
  pokemonAtt.textContent = ""
  pokemonD.textContent = ""
  pokemonSA.textContent = ""
  pokemonSD.textContent = ""
  pokemonSpeed.textContent =
    pokemonId.textContent = ""
  pokemonW.textContent = ""
  pokemonH.textContent = ""
  types.innerHTML = ""
  spriteContainer.innerHTML = `<img src="" id="">`
}
searchBtn.addEventListener('click', e => {
  e.preventDefault();
  fetchData()
})
