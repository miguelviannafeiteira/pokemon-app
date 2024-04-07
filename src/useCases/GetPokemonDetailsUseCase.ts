import { Dispatch } from "redux"
import { Pokemon } from "../types"
import { getPokemon } from "../redux/pokemonActions"

export class getPokemonDetailsUseCase {
    private dispatch: Dispatch

    constructor(dispatch: Dispatch) {
        this.dispatch = dispatch
    }

    getDetails(pokemon: Pokemon) {
        this.dispatch(getPokemon(pokemon))
    }
}