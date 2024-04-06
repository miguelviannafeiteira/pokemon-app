import { Pokemon } from "../types";

export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMONS_REQUEST = 'FETCH_POKEMONS_REQUEST';

export type PokemonsActions = {
    type?: string;
    payload?: Pokemon[]
}

type ActionTypes = 'FETCH_POKEMONS_REQUEST' | 'FETCH_POKEMONS_SUCCESS';

export const fetchPokemonsRequest = (): { type: ActionTypes } => ({
    type: FETCH_POKEMONS_REQUEST
});

export const fetchPokemonsSuccess = (data: Pokemon[]): { type: ActionTypes, payload: Pokemon[] } => ({
    type: FETCH_POKEMONS_SUCCESS,
    payload: data
});
