import { FC } from "react"
import { Card, Grid, Text } from "@nextui-org/react"

import { Pokemon } from "@/interfaces";

import styles from '../../styles/PokemonHero.module.css';

interface Props {
    pokemon: Pokemon
}

const PokemonHero: FC<Props> = ({pokemon}) => {
    return (
        <Grid className={styles.pokemon_hero} xs={12}>
            <Card.Image 
                className={styles.pokemon_image}
                src={pokemon.sprites.pokemon_image || '/img/no-image.jpg'}
                alt={`image of ${pokemon.name}`}
                width={350}
                height={350}
                objectFit="contain"
            />
        
            <Text className={styles.pokemon_name} h1>{pokemon.name}</Text>

        </Grid>
    )
}

export default PokemonHero