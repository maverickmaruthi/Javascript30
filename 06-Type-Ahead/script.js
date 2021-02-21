const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const cities = [];

async function getCities() {
  const response = await fetch(endpoint);
  const data = await response.json();
  cities.push(...data);
}

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || 
           place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const searchTerm = searchInput.value;
  const matchArray = findMatches(searchTerm, cities);
  console.log(matchArray);
  const searchElList = matchArray.map(place => {
    const regex = new RegExp(searchTerm, 'gi');
    const cityName = place.city.replace(regex, 
      `<span class="hl">${searchTerm}</span>`);
    const stateName = place.state.replace(regex, 
      `<span class="hl">${searchTerm}</span>`);
    return `<li>
              <span class="name">
                ${cityName},${stateName}
              </span>
              <span class="population">
                ${numberWithCommas(place.population)}
              </span>
            </li>`;
  });
  suggestions.innerHTML = searchElList.join('');
}
searchInput.addEventListener('keyup', displayMatches)
getCities();