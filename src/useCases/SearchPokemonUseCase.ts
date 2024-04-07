import { Dispatch } from "redux";
import { searchPokemon } from "../services/searchPokemon";
import { fetchPokemonsRequest, fetchPokemonsSuccess } from "../redux/pokemonsActions";
import { GetPokemonsUseCase } from "./GetPokemonsUseCase";

export class SearchPokemonUseCase {
    private dispatch: Dispatch
    private getAllPokemons: GetPokemonsUseCase

    constructor(dispatch: Dispatch, getAllPokemons: GetPokemonsUseCase) {
        this.dispatch = dispatch
        this.getAllPokemons = getAllPokemons
    }

    async execute(pokemonName: string) {
        if (!pokemonName) {
            this.getAllPokemons.execute()
            return
        }

        try {
            this.dispatch(fetchPokemonsRequest())
            console.log(121);

            const pokemon = await searchPokemon(pokemonName)
            this.dispatch(fetchPokemonsSuccess([pokemon]))
        }
        catch {
            this.dispatch(fetchPokemonsSuccess([]))
        }

    }
}