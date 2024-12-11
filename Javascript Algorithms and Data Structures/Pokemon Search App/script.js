const inputValue = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const linesIcon = document.getElementById("display1-icon");
const display1 = document.getElementById("display1-container");

const imageField = document.getElementById("pokemon-image");
const nameField = document.getElementById("pokemon-name");
const idField = document.getElementById("pokemon-id");
const typeField = document.getElementById("types");
const weightField = document.getElementById("weight");
const heightField = document.getElementById("height");
const hpField = document.getElementById("hp");
const attackField = document.getElementById("attack");
const defenseField = document.getElementById("defense");
const specialAttackField = document.getElementById("special-attack");
const specialDefenseField = document.getElementById("special-defense");
const speedField = document.getElementById("speed");

const setFavicon = (iconPath) => {
  const favicon = document.getElementById("favicon");
  if (favicon) {
    favicon.href = iconPath;
  }
};

const fetchPokemonData = async (pokemonName) => {
  try {
    typeField.innerHTML = ""; // Clear previous types
    const apiUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonName}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Network response was not ok. Status ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    // Displaying types
    const pokemonTypes = data.types.map((type) => type.type.name.toUpperCase());
    pokemonTypes.forEach((type) => {
      const typeElement = document.createElement("div");
      typeElement.textContent = type;
      typeField.appendChild(typeElement);
    });

    // Setting other fields
    imageField.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="pokemon-image" style="max-width: 100%; max-height: 100%; object-fit: contain;">`;
    nameField.innerHTML = `${data.name.toUpperCase()}`;
    idField.innerHTML = `#${data.id}`;
    weightField.innerHTML = `Weight: ${data.weight}`;
    heightField.innerHTML = `Height: ${data.height}`;
    hpField.innerHTML = `${data.stats[0].base_stat}`;
    attackField.innerHTML = `${data.stats[1].base_stat}`;
    defenseField.innerHTML = `${data.stats[2].base_stat}`;
    specialAttackField.innerHTML = `${data.stats[3].base_stat}`;
    specialDefenseField.innerHTML = `${data.stats[4].base_stat}`;
    speedField.innerHTML = `${data.stats[5].base_stat}`;
  } catch (error) {
    console.error("Error fetching Pokémon data: ", error);
    alert("Pokémon not found");
  } finally {
    setFavicon("");
  }
};

linesIcon.addEventListener("click", () => {
  display1.classList.toggle("hidden");
});

searchBtn.addEventListener("click", () => {
  fetchPokemonData(inputValue.value.toLowerCase());
});

inputValue.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchBtn.click();
  }
});
