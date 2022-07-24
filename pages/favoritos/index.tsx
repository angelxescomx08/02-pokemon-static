import { useEffect, useState } from "react";

import { Layout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";
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
          <FavoritePokemons favoritePokemons={favoritePokemons}/>
        )
      }
      
    </Layout>
  )
}

export default Favoritos
