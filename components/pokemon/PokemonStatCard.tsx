import { FC } from "react";
import { Card, Container, Grid, Text } from "@nextui-org/react";

import styles from '../../styles/PokemonStatCard.module.css';


interface Props {
    stats: object;
}

const PokemonStatCard: FC<Props> = ({ stats }) => {
    
    const origin = (typeof window === 'undefined') ? '' : window.location.origin;
    
    const { base_stat, stat:{name} }:any = stats; 
     
    return (
        <Grid xs={6} sm={4} md={2} className={styles.pokemon_stat_card}>
            <Card className={styles.card_container}>
                <Card.Header className={styles.pokemon_stat_image}>
                    <Card.Image 
                        src={`${origin}/img/${name}.png`}
                        alt={`image of ${name} stat`}
                        width={60}
                        height={60}
                        objectFit="contain"
                    />
                    <Text h3 transform="capitalize">
                        {name}
                    </Text>
                </Card.Header>

                <Card.Body className={styles.pokemon_stat_number}>
                    <Container direction="row" display="flex" gap={0} justify="center">
                        <Text>
                            {base_stat}
                        </Text>
                    </Container>
                </Card.Body>
            </Card>
        </Grid>
    );
};

export default PokemonStatCard;
