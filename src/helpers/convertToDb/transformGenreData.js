import { generosCombinados } from "./generosCombinados";

export const transformGenreData = ( genresData ) => {
    const nombresGenero  = genresData.map( ( { name } ) => {
        return name;
    })
    const newGenerosCombinados = generosCombinados(nombresGeneros);
 
    return nombresGenero;
}

