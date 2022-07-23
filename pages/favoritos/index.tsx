import { useEffect, useState } from "react";

import { Card, Grid } from "@nextui-org/react";

import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const Favoritos = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(()=>{
    setFavoritePokemons(localFavorites.pokemons());
  },[])

  return (
    <Layout title='pokemons favoritos'>

      {
        favoritePokemons.length === 0 ? (<NoFavorites/>) 
        : (
          <Grid.Container gap={2} direction='row' justify="flex-start">
            {
              favoritePokemons.map(id=>(
                <Grid xs={6} sm={3} xl={1} key={id}>
                  <Card isHoverable={true} isPressable={true} css={{
                    padding: 10
                  }}>
                    <Card.Image 
                      width={'100%'}
                      height={140}
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}/>
                  </Card>
                </Grid>
              ))
            }
          </Grid.Container>
        )
      }
      
    </Layout>
  )
}

export default Favoritos
