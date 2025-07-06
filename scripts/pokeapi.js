export default class PokeApi {
  constructor() {
    this.url = "https://pokeapi.co/api/v2/";
  }

  // ------------- GET RANDOM POKEMON -------------   (
  async getPokemon() {
    const id = Math.floor(Math.random() * 150 + 1);
    // console.log("ID: ", id); // WORKS!!
    const response = await axios.get(`${this.url}/pokemon/${id}`);
    // console.log("GET: ", response.data.name); // WOKRS!
    return response.data;
  }

  // Need secondary local API to post guesses to and compare against PokeApi results
}
