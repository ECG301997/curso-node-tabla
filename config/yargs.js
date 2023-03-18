const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Sirve para listar en consola el archivo que fue creado'
                    })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                        default: 10,
                        describe: 'El numero final de la tabla para multiplicar'
                    })
                    .check((argv, options)=>{
                        if( isNaN(argv.b)){
                            throw 'La base tiene que ser un numero'
                        }else if(isNaN(argv.h)){
                            throw 'El numero final solo puede tener caracteres numericos'
                        }
                        return true;
                    })
                    .argv;


module.exports = argv;