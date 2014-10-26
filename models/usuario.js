var Usuario = function (app) {
    var Schema = require("mongoose").Schema;

    var usuario = Schema({
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        }
    });

    return db.model("usuarios", usuario);
};

module.exports = Usuario;