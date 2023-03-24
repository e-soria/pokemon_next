import { useEffect, useState } from "react";

import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { Button, Grid, Text } from "@nextui-org/react";
import confetti from 'canvas-confetti';

import { Layout } from "@/components/layouts";
import { PokemonAbilityCard, PokemonHero, PokemonSpritesCard, PokemonStatCard } from "@/components/pokemon";

import { pokeApi } from "@/api";
import { Pokemon, PokemonListResponse } from "@/interfaces";
import { localFavorites } from "@/utils";

import styles from '../../styles/PokemonInfo.module.css';
import getPokemonInfo from "@/api/getPokemonInfo";

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({pokemon}) => {

    const [isInFavorites, setIsInFavorites] = useState(false);

    useEffect(() => {
        setIsInFavorites(localFavorites.existInFavorites(pokemon.id))
    },[pokemon.id])

    const onToggleFavorite = () => {

        localFavorites.toggleFavorite(pokemon.id);
        setIsInFavorites(!isInFavorites);

        if ( isInFavorites ) return;

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            }
        })
    }

    return(
        <Layout title={pokemon.name}>
            <Grid.Container gap={2} as="section">

                <PokemonHero 
                    pokemon={pokemon}
                />

            </Grid.Container>

            <Grid.Container gap={2} as="section" className={styles.pokemon_info}>
                
                <Grid xs={12} className={styles.favorites_cta}>
                    <Button 
                        color={"gradient"} 
                        bordered={!isInFavorites}
                        onPress={onToggleFavorite}
                    >
                        <span>{ isInFavorites ? 'En favoritos' : 'Agregar a favoritos'}</span>
                    </Button>
                </Grid>

                 
                <Grid xs={12} direction="column">
                    <div className={styles.section_title}>
                        <Text h2 transform="capitalize">Sprites</Text>
                    </div>

                    <PokemonSpritesCard 
                        pokemonName={pokemon.name}
                        sprites={pokemon.sprites}
                    />
                </Grid>


                <Grid xs={12} direction="column">
                    <div className={styles.section_title}>
                        <Text h2 transform="capitalize">Stats</Text>
                    </div>

                    <Grid.Container gap={2} className={styles.stat_cards_container}>
                        {
                            pokemon.stats.map((stat, index) => {
                                return <PokemonStatCard 
                                    key={index}
                                    stats={stat}
                                />
                            })
                        }
                    </Grid.Container>
                </Grid>


                <Grid xs={12} direction="column">
                    <div className={styles.section_title}>
                        <Text h2 transform="capitalize">Abilities</Text>
                    </div>

                    <Grid.Container gap={2} className={styles.ability_cards_container}>
                        {
                            pokemon.abilities.map((ability, index) => {
                                return <PokemonAbilityCard 
                                    key={index}
                                    ability={ability}    
                                    ability_number={index+1}
                                />
                                
                            })
                        }
                    </Grid.Container>
                </Grid>

            </Grid.Container>
        </Layout>
    )

};


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemonNames: string[] = data.results.map(pokemon => pokemon.name);

    return {
        paths: pokemonNames.map( name => ({
            params: { name }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    
    const { name } = params as { name: string};

    const pokemon = await getPokemonInfo( name );

    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }    

    return {
        props: {
           pokemon: pokemon
        },
        revalidate: 86400 // 60 * 60 *24
    }
}



export default PokemonByNamePage;
