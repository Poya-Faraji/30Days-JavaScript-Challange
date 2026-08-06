const pElem = document.querySelector("#break-dowm");

pElem.addEventListener("click", makeGreen);

const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  pElem.style.color = "#BADA55";
  pElem.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string!", "Interpolated");

// Styled
console.log("%c Hello I am a %s string!", "color: red; font-size: 5rem;");

// warning!
console.warn("This is an warning");

// Error :|
console.error("Well this is custom error");

// Info
console.info("This is an info");

const p = document.querySelector("p");
// Testing
console.assert(p.classList.contains("ouch"), "That is wrong!");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
console.log(
  dogs.forEach((dog) => {
    console.group(dog.name);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(dog.name);
  }),
);

// counting
console.count("w");
console.count("w");
console.count("w");
console.count("w");

console.count("three");
console.count("three");
console.count("three");

console.count("randomString");
console.count("randomString");
console.count("randomString");
console.count("randomString");
console.count("randomString");

console.count("IDK");
console.count("IDK");
console.count("IDK");

console.count("amazing");

// timing
console.time("fetching data");

const fetchData = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!result.ok) {
      throw new Error(`HTTP error! status: ${result.status}`);
    }

    const data = await result.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData().then((array) => {
  array.forEach((item) => {
    console.timeEnd("fetching data");
    console.log(item);
  });
});

// table
console.table(dogs);
