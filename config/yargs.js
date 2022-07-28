const argv = require('yargs')
            .option({
            'b':{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            },
            'l':{
                alias: 'list',
                type: 'boolean',
                default: false,
                describe: 'muestra la tabla en consola'
            },
            't':{
                alias: 'to',
                type: 'number',
                demandOption: true,
                describe: 'Es el limite de la tabla de multiplicar'
            }})
            .check( (argv, options) =>{
                if(  isNaN(argv.b) ) {
                    throw 'La base debe ser num';
                }

                if( isNaN(argv.t) ) {
                    throw 'El límite de la tabla debe ser num';
                }

                return true;
            })
            .argv;

module.exports = argv;