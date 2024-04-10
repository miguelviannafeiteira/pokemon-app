import { pokemonApi } from "./api";

export interface PokemonsUrlsResponse {
    count: number;
    results: Result[];
}

export interface Result {
    name: string;
    url: string;
}

export async function getAllPokemonsUrls(limit = 1, itemsPerPage = 20): Promise<PokemonsUrlsResponse> {
    const wichPage = limit * itemsPerPage
    const { data } = await pokemonApi.get<PokemonsUrlsResponse>(`pokemon?limit=20&offset=${wichPage - 20}`)

    return data
}