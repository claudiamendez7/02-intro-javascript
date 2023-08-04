
// Desestructuracion

const persona = {
    nombre: 'Gahyeon',
    edad: 24,
    clave: 'Fox',
};

const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = (nombre, edad, clave) => {

    // console.log(nombre, edad, clave)

    return {
        nombreClave: clave,
        anios: edad,
            lat: 15.765,
            lng: 12.546
    }
}

const {nombreClave, anios, latlng:{lat, lng} }= useContext(persona);
console.log(nombreClave, anios);
console.log(lat,lng);


