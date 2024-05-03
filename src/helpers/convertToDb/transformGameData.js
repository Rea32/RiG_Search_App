

export const transformGameData = ( { name, released, developers, publishers, platforms, genres, background_image, stores, tags} ) => {

    const plataformas = platforms.map( platform =>(
        platform.platform
    ))

    // const generosData = genres.map( genero => {
    //     return genero;
    // })
    // console.log(generosData);
    const newGameData = {
        titulo: name,
        lanzamiento: released,
        desarrolladoras: developers,
        editoras: publishers,
        plataformas: plataformas,
        generos: genres,
        backgroundImage:background_image,
        tiendas: stores,
        etiquetas: tags
    };
    // console.log(generos);
    return newGameData;
}