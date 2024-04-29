import { transformGenreData } from "./transformGenreData";

export const transformGameData = ( { name, released, developers, publishers, platforms, genres, background_image, stores, tags} ) => {

    const plataformas = platforms.map( platform =>(
        platform.platform
    ))

    const generosData = genres.map( genero => {
        return genero;
    })
    const generos = transformGenreData( generosData );
    const newGameData = {
        titulo: name,
        lanzamiento: released,
        desarrolladoras: developers,
        editoras: publishers,
        plataformas: plataformas,
        generos: generos,
        backgroundImage:background_image,
        tiendas: stores,
        etiquetas: tags
    };
    return newGameData;
}