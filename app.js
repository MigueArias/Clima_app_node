const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Nombre ciudad para obtener el clima',
    demand: true,
  },
}).argv;

const getInfo = async (direccion) => {
  try {
    const infor = await lugar.getClima(direccion);
    return `El clima de ${direccion} es de ${infor.temp} grados centigrados`;
  } catch (e) {
    return `No se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion)
  .then (console.log)
  .catch (console.log);
    