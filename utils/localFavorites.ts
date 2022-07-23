const onToggleFavorite = (id: number) => {

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if(favorites.includes(id)){
        favorites = favorites.filter(pokeID=> pokeID !== id);
    }{
        favorites.push(id);
    }

    localStorage.setItem('favorites',JSON.stringify(favorites));
}

const existInFavorites = ( id: number ):boolean => {

    if(typeof window === 'undefined'){
        return false;
    }

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
}

const pokemons = ( ):number[] =>{
    return JSON.parse( localStorage.getItem('favorites') || '[]' );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    onToggleFavorite,
    existInFavorites,
    pokemons
}