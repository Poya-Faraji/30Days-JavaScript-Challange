const ENDPOINT =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

const cities = [];

async function loadCities() {
  try {
    const response = await fetch(ENDPOINT);

    if (!response.ok) {
      throw new Error(`Request failed (${response.status})`);
    }

    const data = await response.json();
    cities.push(...data);
  } catch (err) {
    console.error(err);

    suggestions.innerHTML =
      "<li>Unable to load city data. Please try again later.</li>";
  }
}

// Adds \. before every character to avoid break
function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function findMatches(searchText) {
  if (!searchText) return [];

  const regex = new RegExp(escapeRegex(searchText), "gi");

  return cities.filter(
    ({ city, state }) => regex.test(city) || regex.test(state),
  );
}

function highlight(text, searchText) {
  if (!searchText) return text;

  const regex = new RegExp(escapeRegex(searchText), "gi");

  return text.replace(regex, "<span class='hl'>$&</span>");
}

function displayMatches(matches, searchText) {
  if (matches.length === 0) {
    suggestions.innerHTML = "<li>No matching cities found.</li>";
    return;
  }

  suggestions.innerHTML = matches
    .map(
      ({ city, state, population }) => `
        <li>
          <span class="name">
            ${highlight(city, searchText)},
            ${highlight(state, searchText)}
          </span>

          <span class="population">
            ${Number(population).toLocaleString()}
          </span>
        </li>
      `,
    )
    .join("");
}

function handleSearch(event) {
  const searchText = event.target.value.trim();

  const matches = findMatches(searchText);

  displayMatches(matches, searchText);
}

searchInput.addEventListener("input", handleSearch);

loadCities();
