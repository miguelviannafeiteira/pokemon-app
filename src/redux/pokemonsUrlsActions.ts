import { PokemonsUrlsResponse } from "../services/getAllPokemons";

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';

export type PokemonsActions = {
    type?: string;
    payload?: PokemonsUrlsResponse
}

type ActionTypes = 'FETCH_DATA_REQUEST' | 'FETCH_DATA_SUCCESS';

export const fetchPokemonsUrlsRequest = (): { type: ActionTypes } => ({
    type: FETCH_DATA_REQUEST
});

export const fetchPokemonsUrlsSuccess = (data: PokemonsUrlsResponse): { type: ActionTypes, payload: PokemonsUrlsResponse } => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
});
