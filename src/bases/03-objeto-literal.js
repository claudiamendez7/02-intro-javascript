

const persona = {
    nombre: 'Minji',
    apellido: 'Kim',
    edad: 29,
    direccion:{
        ciudad: 'Seoul', 
        zip: 11144,
        lat: 14.75875,
        lng: 36.98687
    }

};


// console.table({persona});
console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Yoohyeon';


console.log(persona2)

