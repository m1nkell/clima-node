
const axios = require('axios');
const clima = require('../clima/clima');

const getLugar = async ( dir ) => {

    const encodeUrl = encodeURI(dir);
    
    var instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'X-RapidAPI-Key': '9e11c563fcmsh241a9948fb4d32cp1c1e5bjsn2c6fef17f321'}
      });
    
    const resp = await instance.get();

    if(resp.data.Results.length === 0){

        throw new Error(`No hay resultados para la ubicación ingresada: ${dir}`)

    }

    const data = resp.data.Results[0];

    const direccion = data.name;
    const lat = data.lat;
    const long = data.lon;    

    
    return {
        direccion,
        lat,
        long
    }

}


module.exports = {

    getLugar

}