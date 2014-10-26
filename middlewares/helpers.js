var HelpersMiddleware = function (app) {
    const KEY = "meuProjeto.sid";
    const SECRET = "meuProjeto";
    
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');
    var expressSession = require('express-session');
    var mongoose = require('mongoose');
    var cookie = cookieParser(SECRET);
    var store = new expressSession.MemoryStore();
    
    global.db = mongoose.connect("mongodb://localhost/meuProjeto");
    
    app.use(cookie);
    app.use(expressSession({
        secret: SECRET,
        name: KEY,
        resave: true,
        saveUninitialized: true,
        store: store
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
};

module.exports = HelpersMiddleware;