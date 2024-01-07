async function getDigimonsFromAPI() {
  const response = await fetch(
    "https://digitalinnovationone.github.io/api-digimon/api/digimon.json"
  );
  return await response.json();
}

function renderDigimonImage(digimonImageLink) {
  const digimonImageElement = document.getElementById("digimon-img-id");

  digimonImageElement.src = digimonImageLink;
}

function renderDigimonName(digimonName) {
  const digimonNameElement = document.getElementById("t-idname__digimon");

  digimonNameElement.textContent = digimonName;
}

function renderDigimonStatus(digimon) {
  const hpDigimonElement = document.getElementById("HP-internal-div-id");
  const atackDigimonElement = document.getElementById("ATK-internal-div-id");
  const defenseDigimonElement = document.getElementById("DEF-internal-div-id");

  hpDigimonElement.style.width = digimon.HP + "%";
  atackDigimonElement.style.width = digimon.ATK + "%";
  defenseDigimonElement.style.width = digimon.DEF + "%";
}

function chooseRandomDigimon(digimonsList) {
  let randomIndex = Math.floor(Math.random() * digimonsList.length);
  return digimonsList[randomIndex];
}

async function main() {
  const digimons = await getDigimonsFromAPI();
  const chosenDigimon = chooseRandomDigimon(digimons);

  renderDigimonImage(chosenDigimon.image);
  renderDigimonName(chosenDigimon.name);
  renderDigimonStatus(chosenDigimon);
}

main();
