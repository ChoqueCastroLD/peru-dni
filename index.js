const fetch = require('node-fetch');

const perudni = {
    getNameFromDNI(dni, cb) {
        if (typeof dni !== "string") throw new TypeError("You must pass a String as parameter of getNameFromDNI");
        let DNI = ("00000000" + dni).slice(-8);
        let queryUrl = 'http://aplicaciones007.jne.gob.pe/srop_publico/Consulta/Afiliado/GetNombresCiudadano?DNI=' + DNI;
        fetch(queryUrl)
            .then(res => res.text())
            .then((datos) => {
                if (datos.length < 100) {
                    datos = datos.split('|');
                    cb({
                        dni: dni,
                        lastname: datos[0],
                        secondlastname: datos[1],
                        name: datos[2]
                    }, false);
                } else {
                    cb({
                        dni: dni,
                    }, {err: true, message: "Real name not found"});
                }
            })
            .catch(() => {
                cb({
                    dni: dni,
                }, {err: true, message: "Fetch just failed"});
            })
    },
    getNameFromDNI(dni) {
        if (typeof dni !== "string") throw new TypeError("You must pass a String as parameter of getNameFromDNI");
        let DNI = ("00000000" + dni).slice(-8);
        let queryUrl = 'http://aplicaciones007.jne.gob.pe/srop_publico/Consulta/Afiliado/GetNombresCiudadano?DNI=' + DNI;
        return new Promise((resolve, reject) => {
            fetch(queryUrl)
                .then(res => res.text())
                .then((datos) => {
                    if (datos.length < 100) {
                        datos = datos.split('|');
                        resolve({
                            dni: dni,
                            lastname: datos[0],
                            secondlastname: datos[1],
                            name: datos[2]
                        });
                    } else {
                        reject({
                            dni: dni,
                            error: true,
                            message: "Real name not found"
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

module.exports = perudni;