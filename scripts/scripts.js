import PokeApi from "./pokeapi.js";

// ---------- CALLING API ----------
const api = new PokeApi();

// API call for Pokemon
async function fetchPokemon() {
  try {
    const response = await api.getPokemon();
    // console.log("RESP DATA:", response);
    displayPokemon(response);

    // render function for Pokemon
  } catch (error) {
    console.error("FETCHPOKEMON() ERROR: No Pokemon Found!");
  }
}
await fetchPokemon(); // await means not called on page load? what's await doing?
// fetchPokemon();

// ---------- CORRECT GUESS ----------
// function correctGuess() {
//   // const userGuess = form input;
//   // if (userGuess === response.data.name) {
//   // whosThatTitle.classList.add("hero__poke-reveal--true")}
//   // whosThatTitle.textContent = "`${response.data.name}`";
// }

// ---------- DOM ----------
// ---------- RENDER ----------

function displayPokemon(data) {
  console.log("DATA:", data);

  // create page components
  const hero = document.querySelector("#whosThat");

  // CARD
  const whosThatCard = document.createElement("div");
  whosThatCard.classList.add("hero__card");
  whosThatCard.classList.add("#card");

  // DYNAMIC TITLE
  const whosThatTitle = document.createElement("h3");
  whosThatTitle.classList.add("hero__poke-reveal");
  whosThatTitle.classList.add("#reveal");
  whosThatTitle.textContent = "Who is it?";

  if (whosThatTitle.querySelector("hero__poke-reveal--true")) {
    // in event listener! - logic for correct guess to flip content to Pokemon name
    // check if event listener is working!
    whosThatTitle.textContent = `${data.name}`; // WORKS!
  }

  // DYNAMIC IMAGE
  const whosThatPoke = document.createElement("img");
  whosThatPoke.classList.add("hero__poke-img");
  whosThatPoke.classList.add("#poke-img");
  whosThatTitle.querySelector("hero__poke-img"); // need CSS to blackout the sprite!
  whosThatPoke.src = `${data.sprites.front_default}`;

  if (whosThatTitle.querySelector("hero__poke-img--true")) {
    // in event listener! - logic for correct guess to remove dark overlay from sprite
    // check if event listener is working!
    whosThatPoke.src = `${data.sprites.front_default}`; // WORKS!
  }
  // probably grayscale and not blacked out
  // whosThatPoke.src = `${
  //   data.data.sprites.versions.generation - i.yellow.front_gray
  // }`; // escape character needed but failing

  // PUT CARD ALL TOGETHER
  whosThatCard.appendChild(whosThatTitle);
  whosThatCard.appendChild(whosThatPoke);
  // ADD TO HERO SECTION
  hero.appendChild(whosThatCard);
  return hero;
}

// ---------- SUBMIT GUESS EVENT LISTENER ------------
// link event listener to guess form

window.addEventListener("DOMContentLoaded", (data) => {
  console.log("In event listener");

  // grab guess form element
  const guessForm = document.querySelector("#guess");

  guessForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const guess = {
      name: e.target.guessPoke.value
    };

    if (guess === data.name) {
      whosThatTitle.classList.add("hero__poke-reveal--true"); // show pokemon name
      whosThatPoke.classList.add("hero__poke-img--true"); // remove blackout on sprite
    }

    // need a local api to post guesses to, and which compares against PokeApi to return match or not
    // try {
    //   // need function to make POST request
    //   // const response = await.api.postGuess(guess);
    //   // fxn to confirm guess or prompt retry
    // } catch (error) {
    //   console.error("Failed to submit guess, please try again.");
    // }
    guessForm.reset();
  });
});
