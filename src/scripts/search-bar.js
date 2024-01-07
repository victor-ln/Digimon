const searchBar = document.querySelector(".search-bar");
const input = searchBar.querySelector("input");
const suggestionListBox = document.querySelector(".search-bar__suggestion-box");

input.addEventListener("input", (e) => {
  let searchBarData = e.target.value;

  if (searchBarData) {
    const matchedNames = filterDigimonsNamesByUserData(searchBarData);
    if (!matchedNames.length) {
      return;
    }
    const matchedNamesLists = createListsFromMatchedNames(matchedNames);
    renderSuggestions(matchedNamesLists);
  } else {
    hideSuggestions();
  }
});

function hideSuggestions() {
  searchBar.classList.remove("suggestion-list-active");
}

function renderSuggestions(list) {
  const listData = list.join("");

  suggestionListBox.innerHTML = listData;
  searchBar.classList.add("suggestion-list-active");
}

function filterDigimonsNamesByUserData(searchBarData) {
  return digimonsNames.filter((name) => {
    return name
      .toLocaleLowerCase()
      .startsWith(searchBarData.toLocaleLowerCase());
  });
}

function createListsFromMatchedNames(matchedNames) {
  return matchedNames.map((name) => `<li onclick="selectDigimon(this)">${name}</li>`);
}

function selectDigimon(digimonElement) {
  const digimonName = digimonElement.textContent;
  const digimon = digimons.find((digimon) => digimon.name == digimonName);

  renderDigimon(digimon);
}
