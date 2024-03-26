
export const transformDate = ( date ) => {
    // Fecha original en formato ISO
var fechaOriginal = new Date( date );

// Array de meses en español
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Obtener el día, mes y año de la fecha original
var dia = fechaOriginal.getDate();
var mes = meses[fechaOriginal.getMonth()];
var anio = fechaOriginal.getFullYear();

// Formatear la fecha en el formato deseado
var fechaFormateada = dia + " " + mes + " " + anio;

return fechaFormateada;

}