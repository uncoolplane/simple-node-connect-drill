angular.module("myChats").controller("mainCtrl", function($scope, mainSrvc, $interval){

  $scope.chatAppName = "Chatty Cathy";

  //Dummy data to show what the chat messages should look like
  // to work with the frontend
  // TODO Remove once server is integrated;
  $scope.chats = [{
    screenname:"Mr Wiggles",
    message:"I canz sit still"
  },{
    screenname:"Mr Loud",
    message:"I canz use my inside voice"
  },{
    screenname:"Mr Author",
    message:"I canz write childrenz books"
  }]

  $scope.addChat = function(chatmessage){
    // TODO Call service to add chats
    // if($scope.screenname) {
      mainSrvc.addChats(chatmessage)
      .then(function(res) {
        console.log('mainCtrl', res);
        $scope.chats = res;
      });
    // }
  }

  function getChats(){
    // TODO Tell service to get chats
      mainSrvc.getChats().then(function(res) {
        console.log('mainCtrl', res);
        $scope.chats = res;
    });
  }

  $scope.deleteChats = function(){
    // TODO Tell service to delete all chats
    mainSrvc.deleteChats().then(function(res) {
      console.log('mainCtrl', res);
        $scope.chats = res;
    });
  }

  $scope.setScreenName = function(screenname) {
    mainSrvc.setScreenName(screenname);
    $scope.screenname = screenname;
  }

  // Gets initial chats
  getChats();

  // Set up repeating call to get chats
  $interval(getChats, 3000);

})
