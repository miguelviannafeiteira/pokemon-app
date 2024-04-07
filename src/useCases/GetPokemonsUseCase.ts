import { Dispatch } from "redux";
import { getPokemons } from "../services/getPokemons";
import { getAllPokemonsUrls } from "../services/getAllPokemons";
import { fetchPokemonsUrlsSuccess } from "../redux/pokemonsUrlsActions";
import { fetchPokemonsRequest, fetchPokemonsSuccess } from "../redux/pokemonsActions";

export class GetPokemonsUseCase {
    private dispatch: Dispatch

    constructor(dispatch: Dispatch) {
        this.dispatch = dispatch
    }

    async execute(pageValue = 1) {
        try {
            this.dispatch(fetchPokemonsRequest())
            const urls = await getAllPokemonsUrls(pageValue)
            this.dispatch(fetchPokemonsUrlsSuccess(urls))

            const pokemons = await getPokemons(urls.results.map((result) => result.url))
            this.dispatch(fetchPokemonsSuccess(pokemons))
        }
        catch (e) {
            console.error({ message: "Houve um erro ao buscar lista de urls", e })
        }
    }
}