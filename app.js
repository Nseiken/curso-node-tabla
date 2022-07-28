const { resultTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

// const [, , arg3 = 'base=1'] = process.argv;
// const [, base = 1] = arg3.split('=');  
const base = argv.b;
const list = argv.l;
let valorFinalTabla = argv.t;

resultTabla(base, valorFinalTabla, list)
            .then(nameFile => console.log(nameFile.rainbow, 'creado'))
            .catch(err => console.log(err));