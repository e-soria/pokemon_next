import { FC } from "react";
import { SmallPokemon } from "@/interfaces";
import { Grid } from "@nextui-org/react";

import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: SmallPokemon[];
}

const PokemonList: FC<Props> = ({ pokemons }) => {
  
    return (
        <Grid.Container gap={2} justify="flex-start" css={{marginTop: '40px'}}>
            {pokemons.map((pokemon, index) => {
                return(
                    <PokemonCard 
                        key={index}
                        pokemon={pokemon}
                    />
                )
            })}
        </Grid.Container>
  );

};

export default PokemonList;
