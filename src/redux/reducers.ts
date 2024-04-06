import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemonReducer';
import { pokemonsReducer } from './pokemonsReducer';
import { pokemonsUrlsReducer } from './pokemonsUrlsReducer';

const rootReducer = combineReducers({
  pokemonDetails: pokemonReducer,
  pokemonsList: pokemonsReducer,
  pokemonsUrlsData: pokemonsUrlsReducer,
});

export default rootReducer;