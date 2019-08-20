const fetch = require('node-fetch');

const perudni = {
    getNameFromDNI(dni, cb = 0) {
        if (typeof dni !== "string") throw new TypeError("You must pass a String as parameter of getNameFromDNI");
        let DNI = ("00000000" + dni).slice(-8);
        let queryUrl = 'http://aplicaciones007.jne.gob.pe/srop_publico/Consulta/Afiliado/GetNombresCiudadano?DNI=' + DNI;
        if (cb != 0) {
            // If callback is set
            fetch(queryUrl)
                .then(res => res.text())
                .then((datos) => {
                    if (!datos.startsWith("|||")) {
                        datos = datos.split('|');
                        cb({
                            dni: dni,
                            fullname: `${datos[2]} ${datos[0]} ${datos[1]}`,
                            lastname: datos[0],
                            secondlastname: datos[1],
                            name: datos[2]
                        }, false);
                    } else {
                        datos = datos.split('|||');
                        cb({}, {
                            dni: dni,
                            err: true,
                            message: datos[1]
                        });
                    }
                })
                .catch(() => {
                    cb({}, {
                        dni: dni,
                        err: true,
                        message: "Fetch just failed"
                    });
                })
        } else {
            // If callback is not set, return promise
            return new Promise((resolve, reject) => {
                fetch(queryUrl)
                    .then(res => res.text())
                    .then((datos) => {
                        if (!datos.startsWith("|||")) {
                            datos = datos.split('|');
                            resolve({
                                dni: dni,
                                fullname: `${datos[2]} ${datos[0]} ${datos[1]}`,
                                lastname: datos[0],
                                secondlastname: datos[1],
                                name: datos[2]
                            });
                        } else {
                            datos = datos.split('|||');
                            reject({
                                dni: dni,
                                error: true,
                                message: datos[1]
                            });
                        }
                    })
                    .catch(() => {
                        reject({
                            dni: dni,
                            error: true,
                            message: "Fetch just failed"
                        });
                    })
            })
        }
    }
}

module.exports = perudni;