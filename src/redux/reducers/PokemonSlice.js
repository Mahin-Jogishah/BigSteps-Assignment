import { createSlice } from '@reduxjs/toolkit';
import { fetchPokemonList, fetchPokemonTypes } from '../actions/PokemonAction';

const initialState = {
    pokemonList: [],
    status: 'idle',
    error: null,
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemonList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPokemonList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.pokemonList = action.payload;
            })
            .addCase(fetchPokemonList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchPokemonTypes.fulfilled, (state, action) => {
                state.pokemonTypes = action.payload;
            });
    },
});

export default pokemonSlice.reducer;