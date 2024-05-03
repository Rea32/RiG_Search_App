import rigApi from "../../api/rigApi";

export const comprobeGameRigDb = async ( titulo ) => {
    try {
        console.log(titulo);
        const { data } = await rigApi.get('/existGame', { params: { titulo } });
        console.log(`El titulo ${titulo} ${data ? "existe" : "no existe"} en la RiGDB`);
        return data;
    } catch (error) {
        console.log(error.response.data);
        throw error; // Re-lanzar el error para que el manejador superior pueda capturarlo si es necesario
    }
}