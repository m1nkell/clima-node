const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({

    direccion: {
        alias: 'd',
        desc: 'Es la dirección de la ciudad o Pais a obtener el clima.',
        demand: true        
    }

}).argv;


const getInfo = async(direccion) => {

    try { 

        coord = await lugar.getLugar(direccion);
        temp = await clima.getClima(coord.lat,coord.long);
        console.log(`El clima de ${coord.direccion} es de ${temp}.`);

    } catch (error) {
        console.log(`Error al verificar el clima de ${direccion}`);
    }

}


getInfo(argv.direccion);