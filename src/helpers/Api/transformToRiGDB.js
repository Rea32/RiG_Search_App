import { generosCombinados } from "../convertToDb/generosCombinados";
import { transformGameData } from "../convertToDb/transformGameData";
import { transformGenreData } from "../convertToDb/transformGenreData";
import { addRigDb } from "./addRigDb";
import { getGenreRigDb } from "./getGenreRigDb";

export const transformToRiGDB = async ( gameData ) => {
    try {
        const nombresGeneros = await transformGenreData(gameData.genres);
        const newGenerosCombinados = generosCombinados(nombresGeneros);
        const generos = await Promise.all (newGenerosCombinados.map( async nombre => {
            const { genre } = await getGenreRigDb({name:nombre});
            return genre;
        }));  
        console.log(generos);

        const juegoActualizado = Object.assign({}, gameData, { genres: generos }); //Asignamos los nuevos generos traducidos

        addRigDb(transformGameData(juegoActualizado));

    } catch (error) {
        console.log(error)
        throw error;
    }

    

}
