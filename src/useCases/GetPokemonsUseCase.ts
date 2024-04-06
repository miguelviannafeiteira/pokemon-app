import { Dispatch } from "redux";
import { getPokemons } from "../services/getPokemon";
import { getAllPokemonsUrls } from "../services/getAllPokemons";
import { fetchPokemonsRequest, fetchPokemonsSuccess } from "../redux/pokemonsActions";
import { fetchPokemonsUrlsRequest, fetchPokemonsUrlsSuccess } from "../redux/pokemonsUrlsActions";

export class GetPokemonsUseCase {
    private dispatch: Dispatch

    constructor(dispatch: Dispatch) {
        this.dispatch = dispatch
    }

    async execute(pageValue = 1) {
        try {
            this.dispatch(fetchPokemonsUrlsRequest());
            const urls = await getAllPokemonsUrls(pageValue)
            this.dispatch(fetchPokemonsUrlsSuccess(urls))

            this.dispatch(fetchPokemonsRequest())
            const pokemons = await getPokemons(urls.results.map((result) => result.url))
            this.dispatch(fetchPokemonsSuccess(pokemons))
        }
        catch (e) {
            console.error({ message: "Houve um erro ao buscar lista de urls", e })
        }
    }
}