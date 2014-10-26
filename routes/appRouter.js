var AppRouter = function (app) {
    var AppController = app.controllers.appController;
    var Autenticador = app.middlewares.autenticador;

    app.get("/", AppController.index);
    app.post("/login", AppController.login);
    app.get("/home", Autenticador.autenticar, AppController.home);
    app.get("/logout", AppController.logout);
};

module.exports = AppRouter;