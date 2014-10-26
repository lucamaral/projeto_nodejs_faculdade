var AppController = function (app) {
    var Usuario = app.models.usuario;

    return {
        index: function (request, response) {
            response.render("index");
        },
        login: function (request, response) {
            var usuarioReq = request.body.usuario;
            var pesquisa = {
                "email": usuarioReq.email,
                "nome": usuarioReq.nome
            };
            Usuario.findOne(pesquisa)
                .select("nome email")
                .exec(function (erro, usuarioPesquisado) {
                    if (usuarioPesquisado) {
                        request.session.usuario = usuarioPesquisado;
                        response.redirect("/home");
                    } else {
                        Usuario.create(usuarioReq, function (erro, usuarioCriado) {
                            request.session.usuario = usuarioCriado;
                            response.redirect("/home");
                        });
                    }
                });
        },
        home: function (request, response) {
            var usuario = request.session.usuario;
            var parametros = {
                "usuario": usuario
            };
            response.render("home", parametros);
        },
        logout: function (request, response) {
            request.session.destroy();
            response.redirect("/");
        }
    };
};

module.exports = AppController;