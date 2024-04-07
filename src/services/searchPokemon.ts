import { Pokemon } from "../types";
import { pokemonApi } from "./api";

export async function searchPokemon(pokemonName: string): Promise<Pokemon> {
    const { data } = await pokemonApi.get<Pokemon>(`pokemon/${pokemonName}`)

    return data
}