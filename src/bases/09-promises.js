
import {getHeroeById} from './bases/08-imp-ext';

// const promise = new Promise((resolve, reject)=> {

//     setTimeout( () => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // resolve('No se pudo encontrar el héroe');
//     }, 2000 )
    

// });

// promise.then((heroe)=>{
//     console.log('heroe', heroe)
// })
// .catch(err => console.warn(err));

const getHeroeByAsync = (id) => {
    return new Promise((resolve, reject)=> {

        setTimeout( () => {
            const heroe = getHeroeById(id);
            if(heroe) {
                resolve(heroe);
            }else {
                reject('No se pudo encontrar el héroe');
            }
        }, 2000 )
    
    
    });
}
getHeroeByAsync(1)
    // .then(heroe => console.log ('Heroe', heroe))
    .then(console.log)
    .catch(console.warn);
