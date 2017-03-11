angular.module("myChats").service("mainSrvc", function($http){

  this.getChats = function(){
    //TODO Call server to get the chats
    return $http({
      method: 'GET',
      url : '/api/chats'
    }).then(function(res) {
        console.log('mainSrvc', res);
        return res.data;
    })
  }

  this.addChats = function(chat){
    //TODO Call server to add to chats
    return $http({
      method: 'POST',
      url: '/api/chats',
      data: {
        chat: chat
      }
    }).then(function(res) {
      console.log('mainSrvc', res);
      return res.data;
    })
  }

  this.deleteChats = function(){
    //TODO Call server to wipe all the chats
    return $http({
      method: 'DELETE',
      url: '/api/chats'
    }).then(function(res) {
      console.log('mainSrvc', res);
      return res.data;
    })
  }

  this.setScreenName = function(screenname) {
    return $http({
      method:'POST',
      url: '/api/screenname',
      data: {
        screenname: screenname
      }
    }).then(function(res) {
      return res.data;
    })
  }
});
