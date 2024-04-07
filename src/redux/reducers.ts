import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemonReducer';
import { pokemonsReducer } from './pokemonsReducer';
import { paginationReducer } from './paginationReducer';
import { pokemonsUrlsReducer } from './pokemonsUrlsReducer';

const rootReducer = combineReducers({
  pokemonsList: pokemonsReducer,
  currentPage: paginationReducer,
  pokemonDetails: pokemonReducer,
  pokemonsUrlsData: pokemonsUrlsReducer,
});

export default rootReducer;