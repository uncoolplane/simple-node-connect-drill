var chats = [];
module.exports = {

  getChats:function(req,res){
    res.json(chats); //json?
  },
  postChats:function(req,res){
    var chat = req.body.chat;
    chat.screenname = req.session.screenname;
    console.log(chat);

    chats.push(chat);
    res.json(chat); //json?
  },
  deleteChats:function(req,res){
    chats = [];
    res.send(chats);
  }
}
