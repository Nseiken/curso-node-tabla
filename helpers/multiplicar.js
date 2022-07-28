const fs = require('fs');
const colors = require('colors');

const resultTabla = async ( valorTabla = 1, valorFinalTabla = 10, list ) => {
    try {
        let output, consoleOut = "";
        
        for(let i=1; i <= valorFinalTabla; i++) {
            output += `${valorTabla} ${'X'} ${i} ${'='} ${valorTabla * i}\n`;
            consoleOut += `${valorTabla} ${'X'.yellow} ${i} ${'='.yellow} ${valorTabla * i}\n`;
        }
        
        if(list) {
            console.log('======================================='.yellow);
            console.log( 'Tabla de multiplicar del: '.yellow + colors.red( valorTabla ) );
            console.log('======================================='.yellow);
            console.log( consoleOut );
        }
        
        fs.writeFileSync( `./output/tabla-${valorTabla}.txt`, output);
        
        return `tabla-${valorTabla}.txt`; 
    } catch (error) {
        throw error;
    }
};

module.exports = {
    resultTabla
}
