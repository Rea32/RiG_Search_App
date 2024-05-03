import rigApi from "../../api/rigApi";

export const addRigDb = async ( gameData ) => {
    console.log(gameData)
    await rigApi.post('/save', gameData )
                .then (({data})=>{console.log(`El titulo ${data.titulo} se ha mandado a la DB de Real Is Gamer`)})
                .catch (({response})=> {console.log(response.data)});
}