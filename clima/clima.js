const axios = require('axios');

const getClima = async (lat,long) => {

    const info = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=810e47858ea4fcf4941b4f63d5575646&units=metric`);

    return info.data.main.temp;

}

module.exports = {

    getClima

}