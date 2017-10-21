(function(){

	function Message($firebaseArray){
		var Message = {};
		var ref = firebase.database().ref().child("messages");

		/* This function will populate the messages */
		Message.getByRoomId = function(roomID) {

			var messages = $firebaseArray(ref.orderByChild('roomId').equalTo(roomID));
			Message.all = messages;
			console.log("messages = " + messages);
		};

		return Message;

	}


	angular
		.module('blocChat')
		.factory('Message',['$firebaseArray', Message]);
})();
