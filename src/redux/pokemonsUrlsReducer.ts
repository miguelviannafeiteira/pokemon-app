import { PokemonsUrlsState } from '../types';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, PokemonsActions } from './pokemonsUrlsActions';

const initialState: PokemonsUrlsState = {
    pokemonsUrls: {
        count: 0,
        urls: [],
    },
    loading: false,
};

export const pokemonsUrlsReducer = (state = initialState, action: PokemonsActions) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_DATA_SUCCESS:
            return { ...state, loading: false, pokemonsUrls: { count: action.payload?.count, urls: action.payload?.results.map((result) => result.url) } };
        default:
            return state;
    }
};