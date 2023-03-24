
import pokeApi from '../api/pokeApi';
import { Pokemon } from '@/interfaces';

export const getPokemonInfo = async (nameOrId: string) => {
  
    try {

        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

        // RESOLVE ALL POEMON ABILITY PROMISES

        const abilityPromises = await Promise.all(
            data.abilities.map((ability) => {
            return pokeApi
                    .get<Pokemon>(`/ability/${ability.ability.name}`)
                    .then((results) => {
                    return results.data;
                });
            })
        );

        // GET POKEMON ABILITIES INFO

        const abilities = abilityPromises.map((ability) => {

            const abilityDescription = ability.effect_entries[1]?.effect || ability.flavor_text_entries[7].flavor_text;

            return {
                name: ability.name,
                description: abilityDescription,
            };
            
        });

        // BUILD THE POKEMON OBJECT WITH ALL THE INFO

        const pokemon = {
            id: data.id,
            name: data.name,
            sprites: {
                back_default : data.sprites.back_default,
                front_default: data.sprites.front_default,
                back_shiny : data.sprites.back_shiny,
                front_shiny : data.sprites.front_shiny,
                pokemon_image: data.sprites.other?.dream_world.front_default
            },
            stats: data.stats,
            abilities,
        };

        return pokemon;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export default getPokemonInfo;