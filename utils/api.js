export function getCharacters(name) {
  return fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
    .then((response) => response.json())
    .then((response) => response.results);
}
