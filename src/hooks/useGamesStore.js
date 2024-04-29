import { useDispatch } from "react-redux";
import gamesApi from "../api/gamesApi";
import { isLoading, setActiveGame, setActualPage, setGamesSearched, setPages, setTitleSearched } from "../store/games/gamesSlice";
import { addRigDb } from "../helpers/addRigDb";
import { transformGameData } from "../helpers/convertToDb/transformGameData";
// import { filterMobile } from "../helpers/filterMobile";

export const useGamesStore = () => {

    const dispatch = useDispatch();

    const startSearchingGames = async( game ) => {
        dispatch ( isLoading() );
        dispatch( setTitleSearched( game ) )
        try {
            const {data} = await gamesApi.get(
                '/games',
                {
                    params:{
                        search: game,
                        search_exact: true,
                        exclude_additions: false,
                        exclude_parents: false,
                        exclude_stores: "9, 8, 4",

                    }
                });
            console.log(data);
            // const gamesFiltered  = filterMobile(data.results);
            // console.log(gamesFiltered);
            const pages = Math.ceil( data.count /20 );
            dispatch( setPages( pages ) );
            dispatch( setGamesSearched( data.results ) )
        } catch (error) {
            console.log("Error al buscar el juego especificado");
            console.log(error);
            
        }
    };

    const startChangePage = async( game, page ) => {
        // console.log(game)
        dispatch ( isLoading() );
        try {
            const { data } = await gamesApi.get(
                '/games',
                {
                    params:{
                        page: page,
                        exclude_additions: false,
                        exclude_parents: false,
                        exclude_stores: "9, 8, 4",
                        search: game,
                        search_exact: true,
                        

                    }
                });
                console.log(data);
            dispatch( setActualPage( page ) );
            dispatch( setGamesSearched( data.results ) )
            
        } catch (error) {
            console.log("Error al cambiar de página");
            console.log(error);
        }
    };

    const startObtainGameDetails = async( id ) => {
        
        dispatch ( isLoading() );
        try {
            const { data } = await gamesApi.get(`/games/${id}`);
            addRigDb(transformGameData(data))
            // console.log(transformGameData(data));
            dispatch( setActiveGame( data ) )
            
        } catch (error) {
            console.log(" Error al mostrar los detalles del juego ");
            console.log(error);
        }
    };

    return{
        //*Propiedades

        //*Metodos
        startSearchingGames,
        startChangePage,
        startObtainGameDetails,
    }

}
