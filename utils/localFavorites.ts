const onToggleFavorite = (id: number) => {
    console.log('Toggle llamado');
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if(favorites.includes(id)){
        favorites = favorites.filter(pokeID=> pokeID !== id);
    }{
        favorites.push(id);
    }

    localStorage.setItem('favorites',JSON.stringify(favorites));
}

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    onToggleFavorite
}