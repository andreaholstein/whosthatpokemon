import PokeApi from "./pokeapi.js";

// ---------- CALLING API ----------
const api = new PokeApi();

// API call for Pokemon
async function fetchPokemon() {
  try {
    const response = await api.getPokemon();
    console.log("RESP DATA:", response);
    displayPokemon(response);

    // render function for Pokemon
  } catch (error) {
    console.error("API ERROR: No Pokemon Found!");
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
  const hero = document.querySelector("#hero");
  // const whosThat = document.createElement("div"); // V2

  // CARD
  const whosThatCard = document.createElement("div");
  whosThatCard.classList.add("hero__card");
  whosThatCard.classList.add("#card");

  // DYNAMIC TITLE
  const whosThatTitle = document.createElement("h3");
  whosThatTitle.classList.add("hero__poke-reveal");
  whosThatTitle.classList.add("#reveal");
  whosThatTitle.textContent = `${data.name}`;
  // whosThatTitle.textContent = "Who is it?";
  // logic for correct guess to flip content to Pokemon name

  // DYNAMIC IMAGE
  const whosThatPoke = document.createElement("img");
  whosThatPoke.classList.add("hero__poke-img");
  whosThatPoke.classList.add("#poke-img");
  whosThatPoke.src = `${data.sprites.front_default}`;
  // whosThatPoke.innerText = {response.data.sprites.front_gray}

  // PUT CARD ALL TOGETHER
  whosThatCard.appendChild(whosThatTitle);
  whosThatCard.appendChild(whosThatPoke);
  // ADD TO HERO SECTION
  // whosThat.appendChild(whosThatCard); // V2
  hero.appendChild(whosThatCard);

  // return whosThat; // V2
  return hero;
}

// V2
// function renderPage(poke) {
//   const hero = document.querySelector("#hero");
//   hero.appendChild(whosThat);
// }

// ---------- SUBMIT GUESS EVENT LISTENER ------------
// need to create guessForm element
// guessForm.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const guess = {
//     name: e.target.guessPoke.value
//   };

//   // try {
//   // need a local api to post guesses to, and which compares against PokeApi to return match or not
//   // need function to make POST request
//   //     const response = await.api.postGuess(guess);
//   //     // fxn to confirm guess or prompt retry

//   // } catch (error) {
//   //     console.error('Failed to submit guess, please try again.');
//   // }
//   guessForm.reset();
// });
