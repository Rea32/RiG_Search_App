import rigApi from "../../api/rigApi";

export const getGenreRigDb = async ( genreName ) => {
    try {
        const { data } = await rigApi.get('/getGenre', { params: genreName });
        return data; // Devolver los datos obtenidos
    } catch (error) {
        console.error(error.response.data);
        throw error; // Re-lanzar el error para que el manejador superior pueda capturarlo si es necesario
    }
}
