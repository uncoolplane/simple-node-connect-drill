var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var port = 3737;

// TODO server front end files with static
app.use(express.static('public')); //public folder where static files are located

app.use(bodyParser.json());

// TODO Initialize Session
app.use(session({
    secret: 'whatever'
})); //check node_modules and look for package express-session, go to index.js, look for module.exports, secret only thing required

app.post("/api/screenname", function(req, res) {
    // TODO Save screenname to session
    req.session.screenname = req.body.screenname; //post request, body contains screen name, add to session variable
    console.log('[POST] screen-name-session', req.session);
    console.log('[POST] screen-name-body', req.body);
    res.send(req.session); // must be called to prevent errors
})

app.get("/api/chats", chatCtrl.getChats);
app.post("/api/chats", chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);

app.listen(port, function() {
    console.log("Listening on port ", port, "for aliens");
});
