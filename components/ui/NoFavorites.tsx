import Image from 'next/image';
import { Container, Text } from '@nextui-org/react'

const NoFavorites = () => {

  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      }}>
        <Text h1>No has agregado ningún Pokemon a favoritos</Text>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg`}
          alt='Imagen de no hay pokemons'
          width={250}
          height={250}
        />
      </Container>
  )
}

export default NoFavorites