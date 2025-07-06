import PokeApi from "./pokeapi.js";

// ---------- CALLING API ----------
const api = new PokeApi();

async function fetchPokemon() {
  try {
    const response = await api.getPokemon();
    console.log("RESP DATA", response.data.name);

    // render function for Pokemon
  } catch (error) {
    console.error("No Pokemon Found!");
  }
}
await fetchPokemon(); // await means not called on page load? what's await doing?
// fetchPokemon();

// ---------- DOM ----------
// ---------- RENDER ----------

function displayPokemon(data) {
  // create page components
  const hero = document.querySelector("#hero");
  // CARD
  const whosThatCard = document.createElement("div");
  whosThatCard.classList.add("hero__card");
  whosThatCard.classList.add("#card");

  // DYNAMIC TITLE
  const whosThatTitle = document.createElement("h3");
  whosThatTitle.classList.add("hero__poke-reveal");
  whosThatTitle.classList.add("#reveal");
  whosThatTitle.textContent = "Who is it?";
  // logic for correct guess to flip content to Pokemon name
}

// ---------- SUBMIT GUESS EVENT LISTENER ------------
// need to create guessForm element
guessForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const guess = {
    name: e.target.guessPoke.value
  };

  // try {
  // need a local api to post guesses to, and which compares against PokeApi to return match or not
  // need function to make POST request
  //     const response = await.api.postGuess(guess);
  //     // fxn to confirm guess or prompt retry

  // } catch (error) {
  //     console.error('Failed to submit guess, please try again.');
  // }
  guessForm.reset();
});
