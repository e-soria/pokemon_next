import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Grid, Card, Row, Text } from "@nextui-org/react";
import { SmallPokemon } from "@/interfaces";

import styles from '../../styles/PokemonCard.module.css';

interface Props {
    pokemon: SmallPokemon;
}


const PokemonCard: FC<Props> = ({ pokemon }) => {

    const { id, name, img } = pokemon;

    const router = useRouter();

    const handleClick = () => {
        router.push(`/pokemon/${name}`);
    }

    return (
  
        <Grid xs={6} sm={3} md={2} xl={1.5} key={id}>
            <Card className={styles.pokemon_card} isHoverable isPressable onClick={handleClick}>
        
                <Card.Body css={{ p: 10, alignItems: 'center' }}>     
                    <Card.Image 
                        src={img}
                        alt={`Imagen de ${name}`}
                        width={150}
                        height={150}
                        />
                </Card.Body>

                <Card.Footer>
                    <Row className={styles.pokemon_card_info} justify="center">
                        <Text transform="capitalize">{name}</Text>
                        <Text className={styles.pokemon_id}>{id}</Text>
                    </Row>
                </Card.Footer>
        
            </Card>
        </Grid>

    );
};

export default PokemonCard;
