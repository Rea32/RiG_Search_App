export const generosCombinados = ( nombresGeneros ) => {

    if (nombresGeneros.includes("Acción") && nombresGeneros.includes("RPG")){
        nombresGeneros.push("Action-RPG");
        const newNombreGenero =  nombresGeneros.filter( genero => genero != "Acción" && genero != "RPG");
        return newNombreGenero;
    }
    return nombresGeneros;
}