
import { getGenreRigDb } from "../Api/getGenreRigDb";
import { generosCombinados } from "./generosCombinados";

export const transformGenreData =  ( genresData ) => {

    const nombresGeneros  = genresData.map( ( { name } ) => {
        switch (name) {
            case "Action":
                return "Acción";
            case "Adventure":
                return "Aventura";
            case "Strategy":
                return "Estrategia";          
            case "Simulation":
                return "Simulación";         
            case "Platformer":
                return "Plataformas";  
            case "Racing":
                return "Carreras"; 
            case "Sports":
                return "Deportes";    
            case "Fighting":
                return "Lucha";   
            case "Board Games" || "Card":
                return "Card Battlers"; 
            default:
                return name;
        }
    })
 
   
    return nombresGeneros;
}


