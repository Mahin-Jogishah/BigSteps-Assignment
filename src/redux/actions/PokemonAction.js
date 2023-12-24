import { createAsyncThunk } from '@reduxjs/toolkit';

const POKEMON_IMGURL = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/";
const POKEMON = "https://pokeapi.co/api/v2/";

export const fetchPokemonTypes = createAsyncThunk('fetchPokemonTypes', async () => {
    try {
        const response = await fetch(`${POKEMON}type`);
        const data = await response.json();
        return data.results.map((type) => type.name);
    } catch (error) {
        throw error;
    }
});

export const fetchPokemonList = createAsyncThunk('fetchPokemonList', async () => {
    try {
        const response = await fetch(`${POKEMON}pokemon?limit=200&offset=0`);
        const data = await response.json();
        const pokemonList = await Promise.all(
            data.results.map(async (pokemon) => {
                const detailsResponse = await fetch(pokemon.url);
                const detailsData = await detailsResponse.json();
                const svgUrl = `${POKEMON_IMGURL}${detailsData.id}.svg`;

                const stats = detailsData.stats.map((stat) => ({
                    name: stat.stat.name,
                    value: stat.base_stat,
                }));

                return {
                    name: detailsData.name,
                    imageUrl: svgUrl,
                    types: detailsData.types.map((type) => type.type.name),
                    stats: stats,
                };
            })
        );
        console.log("Pokemon list :", pokemonList)
        return pokemonList;
    } catch (error) {
        throw error;
    }
});
