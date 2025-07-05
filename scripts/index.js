import PokeApi from "./api";

// ---------- CALLING API ----------
const api = new PokeApi();

async function fetchPokemon() {
  try {
    const response = await api.getPokemon();
    // render function for Pokemon
  } catch (error) {
    console.error("No Pokemon Found!");
  }
}
await fetchPokemon(); // await means not called on page load? what's await doing?

// ---------- DOM ----------
// ---------- RENDER ----------

function displayPokemon(data) {
  // create page components
}

// ---------- SUBMIT GUESS EVENT LISTENER ------------
// need to create  guessForm element
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
