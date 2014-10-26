var Autenticador = function (app){
    return {
        autenticar : function (request, response, next){
            if(request.session.usuario){
                return next(); 
            }
            return response.redirect("/");
        }
    };
};

module.exports = Autenticador;