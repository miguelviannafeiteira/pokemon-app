import { Dispatch } from "redux";
import { changePage } from "../redux/paginationActions";
import { searchPokemon } from "../services/searchPokemon";
import { GetPokemonsUseCase } from "./GetPokemonsUseCase";
import { fetchPokemonsUrlsSuccess } from "../redux/pokemonsUrlsActions";
import { fetchPokemonsRequest, fetchPokemonsSuccess } from "../redux/pokemonsActions";

export class SearchPokemonUseCase {
    private dispatch: Dispatch
    private getAllPokemons: GetPokemonsUseCase

    constructor(dispatch: Dispatch, getAllPokemons: GetPokemonsUseCase) {
        this.dispatch = dispatch
        this.getAllPokemons = getAllPokemons
    }

    async execute(pokemonName: string) {
        if (!pokemonName) {
            this.dispatch(changePage(1))
            this.getAllPokemons.execute()
            return
        }

        try {
            this.dispatch(fetchPokemonsRequest())

            const pokemon = await searchPokemon(pokemonName)
            this.dispatch(fetchPokemonsSuccess([pokemon]))
        }
        catch {
            this.dispatch(fetchPokemonsSuccess([]))
        }
        finally {
            this.dispatch(fetchPokemonsUrlsSuccess({ count: 0, results: [] }))
        }

    }
}