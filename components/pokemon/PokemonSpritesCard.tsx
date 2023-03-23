import { Card, Grid, Image } from "@nextui-org/react";
import React, { FC } from "react";

import styles from '../../styles/pokemonSprites.module.css';

interface Props {
    pokemonName: String,
    sprites: any
}

const PokemonSprites: FC<Props> = ({ pokemonName ,sprites }) => {

  return (

    <Grid.Container direction="row" gap={2} className={styles.sprite_cards_container}>
        
        <Grid xs={6} sm={3} className={styles.sprite_card}>
            <Card>
                <Card.Body>
                    <Card.Image
                        src={sprites.front_default}
                        alt={`image of ${pokemonName}`}
                        width={150}
                        height={150}
                        objectFit="cover"
                    />
                </Card.Body>
            </Card>
        </Grid>

        <Grid xs={6} sm={3} className={styles.sprite_card}>
            <Card>
                <Card.Body>
                    <Image
                        src={sprites.back_default}
                        alt={`image of  ${pokemonName}`}
                        width={150}
                        height={150}
                        objectFit="cover"
                        />
                </Card.Body>
            </Card>
        </Grid>

        <Grid xs={6} sm={3} className={styles.sprite_card}>
            <Card>
                <Card.Body>
                    <Image
                        src={sprites.front_shiny}
                        alt={`image of  ${pokemonName}`}
                        width={150}
                        height={150}
                        objectFit="cover"
                        />
                </Card.Body>
            </Card>
        </Grid>

        <Grid xs={6} sm={3} className={styles.sprite_card}>
            <Card>
                <Card.Body>
                    <Image
                        src={sprites.back_shiny}
                        alt={`image of  ${pokemonName}`}
                        width={150}
                        height={150}
                        objectFit="cover"
                    />
                </Card.Body>
            </Card>
        </Grid>

    </Grid.Container>
    
  );
};

export default PokemonSprites;
