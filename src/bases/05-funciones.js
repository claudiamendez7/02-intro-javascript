
// funciones JS

const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre)=> {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre)=> `Hola, ${nombre}`;


// console.log(saludar('Siyeon'))

console.log(saludar2('Siyeon'));
console.log(saludar3('Sua'));
console.log(saludar('Dami'));

const getUser = () =>
    ({
        id: 'minji0517',
        username: 'minji_u'
    });

const user = getUser();
console.log(user);

// homework

// Transforma la funcion a flecha
// Tiene que retonar un objeto implicito
// pruebas

const getUsuarioActivo = (nombre) =>({
        id:'0_0_dami',
        username: nombre
});

const usuarioActivo = getUsuarioActivo('Siyeon');
console.log(usuarioActivo);
