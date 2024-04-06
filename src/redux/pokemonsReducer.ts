import { PokemonsState } from '../types';
import { FETCH_POKEMONS_REQUEST, FETCH_POKEMONS_SUCCESS, PokemonsActions } from './pokemonsActions';

const initialState: PokemonsState = {
    pokemonsList: [],
    loading: false,
};

export const pokemonsReducer = (state = initialState, action: PokemonsActions) => {
    
    switch (action.type) {
        case FETCH_POKEMONS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_POKEMONS_SUCCESS:
            return { ...state, loading: false, pokemonsList: action.payload };
        default:
            return state;
    }
};