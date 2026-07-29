const ENDPOINT =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const suggestions = document.querySelector(".suggestions");
const search = document.querySelector(".search");

const fetchCityData = async () => {
  const res = await fetch(ENDPOINT);

  if (!res.ok) {
    throw new Error(`Failed to feth status code: ${res.status}`);
  }

  const cityData = await res.json();

  return cityData;
};

const cities = [];

fetchCityData().then((data) => {
  cities.push(...data);
});

const handleSearchKeypress = (e) => {
  let searchParams = e.target.value;

  // shows users
  e.target.value = searchParams.split(/\s+/).join(" ");
  //   data we need
  const userText = searchParams.trim().split(/\s+/).join(" ");

  const regex = new RegExp(userText, "gi");

  const filteredList = cities
    .map((city) => city)
    .filter((city) => (city.city.match(regex) ? true : false));

  displayMatches(filteredList);
};

function displayMatches(matchArray) {
  const html = matchArray
    .map((place) => {
      const cityName = `<span class="hl">${place.city}</span>`;

      const stateName = `<span class="hl">${place.state}</span>`;
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${place.population.toLocaleString()}</span>
      </li>
    `;
    })
    .join("");
  suggestions.innerHTML = html;
}

search.addEventListener("keyup", handleSearchKeypress);
