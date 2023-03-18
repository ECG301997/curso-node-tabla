// crear las tablas de multiplicar
// const fs = require('fs');
const {crearArchivo} = require('./helpers/multiplicar')
// const argv = require('yargs').argv
const argv = require('./config/yargs');


                    
console.clear();


// let salida = '';
// for (let i = 1; i <= 10; i++) {
//     salida += `Tabla del numero ${i}\n`
//     for (let j = 1; j <= 10; j++) {
//         salida += `${i} * ${j}  =  ${i * j}\n`
//     }
//     fs.writeFileSync(`tabla-${i}.txt`, salida)
//     salida = '';
//     console.log(`tabla-${i}.txt creada`)
// }

// const base = 3;

// const [ , ,arg3] = process.argv
// const [,base= 5] = arg3.split('=')
// console.log(base)

crearArchivo(argv.b,argv.h,argv.l)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err))


// console.log(process.argv)
console.log(argv)

console.log('base: yargs', argv.b)