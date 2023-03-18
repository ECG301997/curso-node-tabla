const fs = require('fs');
const colors = require('colors');

const ruta = './static/'
// const crearArchivo = (base) =>{
    
//     console.log('====================')
//     console.log(`tabla del: ${base}`)
//     console.log('====================')

//     let salida = '';

//     for(let i=1;i<=10;i++){
//         salida += `${base} x ${i} = ${base*1}\n`
//     }

//     console.log(salida)

//     fs.writeFileSync(`tabla-${base}.txt`,salida);

//     console.log(`tabla-${base}.txt creada`)
// }

// const crearArchivo =(base) =>{

//     return new Promise((resolve, reject) =>{
//         console.log('====================')
//         console.log(`tabla del: ${base}`)
//         console.log('====================')
    
//         let salida = '';
    
//         for(let i=1;i<=10;i++){
//             salida += `${base} x ${i} = ${base*1}\n`
//         }
    
//         console.log(salida)
    
//         fs.writeFileSync(`tabla-${base}.txt`,salida);
    
//         resolve(`tabla-${base}.txt creada`)
//     })
// }

const crearArchivo = async(base,final,listar) =>{
    
    try {
        console.log('===================='.green)
        console.log(`tabla del: ${colors.blue(base)}`)
        console.log('===================='.green)
    
        let salida = ''
        let consola = '';

        for(let i=1;i<=final;i++){
            salida += `${base} x ${i} = ${base*i}\n`
            consola += `${colors.yellow(base)} ${'x'.green} ${colors.yellow(i)} ${'='.green} ${colors.yellow(base*i)}\n`
        }
    
        if(listar){
            console.log(consola)
        }
    
        fs.writeFileSync(ruta+`tabla-${base}.txt`,salida);
    
        return `tabla-${base}.txt creada`
    } catch (err) {
        throw err;
    }
}




module.exports = {
    crearArchivo
}