import { Pokemon } from "../types";

export const GET_POKEMON = 'GET_POKEMON';

export type PokemonActions = {
    type?: string;
    payload?: Pokemon
}

type ActionTypes = 'GET_POKEMON';

export const getPokemon = (data: Pokemon): { type: ActionTypes, payload: Pokemon } => ({
    type: GET_POKEMON,
    payload: data
});
