import { combineReducers } from 'redux';
import { pokemonsUrlsReducer } from './pokemonsUrlsReducer';
import { pokemonsReducer } from './pokemonsReducer';

const rootReducer = combineReducers({
  pokemonsUrlsData: pokemonsUrlsReducer,
  pokemonsList: pokemonsReducer,
});

export default rootReducer;