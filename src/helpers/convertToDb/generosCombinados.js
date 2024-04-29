export const generosCombinados = ( nombresGeneros ) => {

    if (nombresGeneros.includes("Action") && nombreGenero.includes("RPG")){
        nombresGeneros.push("Action-RPG");
        const newNombreGenero =  nombreGenero.filter( genero => genero != "Action" && genero != "RPG");
        return newNombreGenero;
    }
    return nombresGeneros;
}