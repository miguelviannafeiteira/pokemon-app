import { GET_POKEMON, PokemonActions } from './pokemonActions';

const initialState = {
    pokemon: {}
};

export const pokemonReducer = (state = initialState, action: PokemonActions) => {
    switch (action.type) {
        case GET_POKEMON:
            return { pokemon: action.payload };
        default:
            return state;
    }
};