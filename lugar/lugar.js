const axios = require('axios');

const getClima = async (dir) => {
  const encodeUrl = encodeURI(dir);

  const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&units=metric&appid=2a665b4bb509c648092adeb54e017183`,
  });

  const resp = await instance.get();
  
  return {
    dir,
    temp : resp.data.main.temp,
    lon : resp.data.coord.lon,
    lat : resp.data.coord.lat,
  };
};

module.exports = {
  getClima,
};
