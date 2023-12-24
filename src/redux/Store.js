// store.js
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './reducers/PokemonSlice';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default store;